import { useEffect, useState } from "react";

export const BackgroundBintang = () => {
    const [bintang, setBintang] = useState([]);
    const [meteor, setMeteor] = useState([]);

    useEffect(() => {
        generateBintang();
        generateMeteor();

        const handleResize = () => {
            generateBintang();
        };

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, []);

    const generateBintang = () => {
        const numberOfBintang = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newBintang = [];

        for (let i = 0; i < numberOfBintang; i++) {
            newBintang.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setBintang(newBintang);
    };

    const generateMeteor = () => {
        const numberOfMeteor = 4
        const newMeteor = [];

        for (let i = 0; i < numberOfMeteor; i++) {
            newMeteor.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setMeteor(newMeteor);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {bintang.map((bintang) => (
                <div
                    key={bintang.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: bintang.size + "px",
                        height: bintang.size + "px",
                        left: bintang.x + "%",
                        top: bintang.y + "%",
                        opacity: bintang.opacity,
                        animationDuration: bintang.animationDuration + "s",
                    }}
                />
            ))}
            {meteor.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 50 + "px",
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};
