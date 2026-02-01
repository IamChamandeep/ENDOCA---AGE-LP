
import { AppConfig } from './types';

export const CONFIG: AppConfig = {
  brandName: "Endoca",
  logoUrl: "https://www.endoca.com/wp-content/themes/mtt-wordpress-theme/assets/img/logo-inverse.svg",
  minAge: 21,
  redirectUrl: "#enter", 
  rejectUrl: "https://google.com",

  // ---------------------------------------------------------
  // 1. BACKGROUND CONTROL (Video ya Embed/GIF yahan chunein)
  // ---------------------------------------------------------
  
  // 'video' = High Quality MP4 Use karega (Niche diya gaya URL)
  // 'embed' = Giphy/YouTube Iframe Use karega (Niche diya gaya embedCode)
  backgroundType: 'embed', 

  // ---------------------------------------------------------
  // OPTION A: MP4 VIDEO SETTINGS (Jab backgroundType: 'video' ho)
  // ---------------------------------------------------------
  videoUrl: "https://videos.pexels.com/video-files/4836075/4836075-hd_1920_1080_24fps.mp4",
  mobileVideoUrl: "https://videos.pexels.com/video-files/5243888/5243888-hd_1080_1920_24fps.mp4",
  videoPoster: "https://images.pexels.com/photos/2100609/pexels-photo-2100609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  // ---------------------------------------------------------
  // OPTION B: EMBED CODE SETTINGS (Jab backgroundType: 'embed' ho)
  // ---------------------------------------------------------
  // Agar aap GIF lagana chahte hain, toh Giphy ka pura Embed code yahan paste karein:
  embedCode: `<iframe src="https://giphy.com/embed/sJMgFhfVCJOdZ7K7Eb?html5=true&controls=0&showinfo=0&autoplay=1&loop=1&mute=1" width="100%" height="100%" style="position:absolute; left:0; top:0;" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`,

  // ---------------------------------------------------------
  // 2. VISUAL EFFECTS (Blur aur Dark Layer)
  // ---------------------------------------------------------
  
  // Blur Intensity: "0px" matlab clear, "20px" matlab heavy blur
  blurIntensity: "5px", 

  // Dark Overlay: 0.0 (Transparent) se 1.0 (Full Black)
  // Agar text padhne mein dikkat ho, toh ise 0.6 ya 0.7 karein
  overlayOpacity: 0.0,

  colors: {
    primary: "#8FB392", 
    secondary: "#2F3E32",
    background: "#0A0C0A",
    text: "#FFFFFF",
    textSecondary: "#E5E7EB",
  },
};
