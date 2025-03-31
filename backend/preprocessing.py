import cv2
import numpy as np

def preprocess_segmentation(img):
    # Resize and normalize as done in Colab
    img = cv2.resize(img, (224, 224))
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = img / 255.0
    return np.expand_dims(img, axis=0)

def preprocess_classification(img):
    # Match your Colab preprocessing steps
    img = cv2.resize(img, (128, 128))
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = img / 255.0
    return np.expand_dims(img, axis=0)