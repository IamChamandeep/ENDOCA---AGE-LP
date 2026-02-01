
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  textSecondary: string;
}

export interface AppConfig {
  brandName: string;
  logoUrl?: string; // Optional URL for image-based logo
  minAge: number;
  redirectUrl: string;
  rejectUrl: string;
  
  // Background Media Configuration
  backgroundType: 'video' | 'embed'; // Switch between 'video' (MP4) or 'embed' (Giphy/Iframe)
  
  // Option A: MP4 Video Settings
  videoUrl: string;
  mobileVideoUrl?: string;
  videoPoster: string;
  
  // Option B: Iframe/Embed Settings
  embedCode?: string; // Paste the full <iframe...> code here
  
  // Visual Effects
  blurIntensity: string; // e.g., "10px"
  overlayOpacity: number; // 0.0 to 1.0
  colors: ThemeColors;
}
