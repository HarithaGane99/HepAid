from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from tensorflow.keras.models import load_model
from preprocessing import preprocess_segmentation, preprocess_classification
import cv2
import base64
from keras.saving import register_keras_serializable

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@register_keras_serializable()
def dice_coefficient(y_true, y_pred):
    y_true_f = tf.keras.backend.flatten(tf.cast(y_true, tf.float32))
    y_pred_f = tf.keras.backend.flatten(tf.cast(y_pred > 0.5, tf.float32))
    intersection = tf.reduce_sum(y_true_f * y_pred_f)
    return (2. * intersection + tf.keras.backend.epsilon()) / (
        tf.reduce_sum(y_true_f) + tf.reduce_sum(y_pred_f) + tf.keras.backend.epsilon())

# Load models
seg_model = load_model(
    'models/segmentation_modelF.keras',
    custom_objects={'dice_coefficient': dice_coefficient},
    safe_mode=False
)
cls_model = load_model('models/classification_modelF.keras',safe_mode=False)

@app.route('/predict', methods=['POST'])
def predict():
    # Receive and save image
    file = request.files['image']
    img = cv2.imdecode(np.fromstring(file.read(), np.uint8), cv2.IMREAD_COLOR)



    
    # Segmentation
    processed_img = preprocess_segmentation(img)
    mask = seg_model.predict(processed_img)
    
    # Post-process segmentation mask
    mask = (mask > 0.5).astype(np.uint8) * 255
    _, buffer = cv2.imencode('.png', mask[0])
    segmentation_result = base64.b64encode(buffer).decode('utf-8')
    
    # Classification
    cls_input = preprocess_classification(img)
    prediction = cls_model.predict(cls_input)
    class_result = 'Malignant' if np.argmax(prediction) == 1 else 'Benign'
    
    return jsonify({
        'segmentation': f"data:image/png;base64,{segmentation_result}",
        'classification': class_result
    })

if __name__ == '__main__':
    app.run()
