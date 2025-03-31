// import Link from "next/link";
// import Image from "next/image";

// export default function Home() {
//     return (
//         <div className="home-container">
//             <h1>Welcome to HepAid</h1>
//             <p>A powerful system for liver tumor segmentation and classification.</p>
//             <Link href="/get-started">
//                 <button className="cta-button">Get Started</button>
//             </Link>
//         </div>
//     );
// }
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to HepAid</h1>
            <p>A powerful system for liver tumor segmentation and classification.</p>
            
            <div className="hero-image-container">
                
            </div>

            <Link href="/get-started">
                <button className="cta-button">Get Started</button>
            </Link>

        </div>
    );
}