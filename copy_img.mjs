import fs from 'fs';

const src = 'C:/Users/Charan Tej/.gemini/antigravity-ide/brain/30ee44b9-9f95-44df-a130-b7429d9dce72/media__1785415985510.jpg';
const dest = 'd:/Devlopments/Codetracker/public/college_illustration.jpg';

fs.copyFileSync(src, dest);
console.log('Copied illustration successfully!');
