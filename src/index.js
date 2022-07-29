import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
const currentDir = process.cwd();
const sourcesDir = [`${currentDir}/src/sources/**/*.{jpg,jpeg,png,gif}`];
const destinationDir = `${currentDir}/src/destinations`;


(async () => {
  await imagemin(sourcesDir, {
    destination: destinationDir,
    plugins: [imageminWebp({ quality: 50 })],
  });

  console.log("Images optimized");
})();
