

## Update Hero Slideshow to 3 Lifestyle Photos Only

### What changes
Remove all existing product images from the slideshow and use only the 3 uploaded lifestyle photos.

### Plan

1. **Save the 3 uploaded images** to `src/assets/`:
   - `lifestyle-group.jpg`
   - `lifestyle-night.jpg`
   - `lifestyle-stairs.jpg`

2. **Update `src/components/Hero.tsx`**:
   - Remove imports for `hoodieFront`, `hoodieBack`, `hoodieLifestyle`, `hoodieDetail`, `hoodieHero`
   - Add imports for the 3 new lifestyle images
   - Update the `slides` array to contain exactly 3 entries
   - All slideshow logic (auto-play, arrows, dots, crossfade) stays the same

