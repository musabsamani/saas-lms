import { useEffect, useState } from "react";
const images = import.meta.glob('/src/assets/img/landing/*');

const useImportImg = (img: string) => {
    const [imageSrc, setImageSrc] = useState<string>('');

    useEffect(() => {
        const loadImage = async () => {
            // Find the image path from the glob results
            const imagePath = Object.keys(images).find((path) => path.includes(img));

            if (imagePath) {
                const imageModule = await images[imagePath]() as Promise<{ default: string }>;
                const resolvedImageModule = await imageModule;
                setImageSrc(resolvedImageModule.default);
            }
        };

        loadImage();
    }, [img]);
    return imageSrc
}

export default useImportImg;
