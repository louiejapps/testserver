export const onConvert64 = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) return reject("No file selected.");

        const reader = new FileReader();

        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;

            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                const maxWidth = 200;  // Resize to max 250px width
                let { width, height } = img;

                const aspectRatio = height / width;
                width = maxWidth;
                height = Math.round(width * aspectRatio);

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);

                const webpBase64 = canvas.toDataURL("image/webp", 1);
                resolve(webpBase64);
            };

            img.onerror = reject;  // Handle image load error
        };

        reader.onerror = reject;  // Handle FileReader error
        reader.readAsDataURL(file);
    });
};