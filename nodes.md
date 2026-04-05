# nowt. — Available Nodes

19 node types across 5 categories.

---

## Input

| Node | Icon | In | Out | Description |
|------|------|----|-----|-------------|
| Text Input | `text.cursor` | 0 | 1 | User-editable text field |
| Image Input | `photo` | 0 | 1 | Pick an image from the photo library |
| Sketch Input | `pencil.tip.crop.circle` | 0 | 1 | Freeform drawing canvas (Apple Pencil supported) |
| Camera Input | `camera` | 0 | 1 | Capture a photo directly from the device camera |

---

## AI & Generate

| Node | Icon | In | Out | Description |
|------|------|----|-----|-------------|
| LLM Prompt | `brain` | 1–3 | 1 | Text and image analysis via large language models |
| Image Generate | `photo.badge.plus` | 1–3 | 1 | Text-to-image generation |
| SVG Generate | `paintbrush.pointed` | 1 | 1 | Generate vector SVG graphics from a text prompt |
| Video Generate | `film` | 1–3 | 1 | Text-to-video and image-to-video generation |
| Music Generate | `music.note` | 1 | 1 | Generate music from a text description |
| Speech Generate | `waveform` | 1 | 1 | Text-to-speech with 25+ voice options |
| Runway | `airplane` | 1–3 | 1 | Multi-tool Runway node: text-to-image, image-to-video, text-to-video, video-to-video |

### Available Models

**LLM Prompt**
- Claude Sonnet 4 (Anthropic)
- Claude 4.5 Sonnet (Anthropic)
- Claude Opus 4.6 (Anthropic)
- Gemini 2.5 Flash (Google)
- GPT-4o (OpenAI)

**Image Generate**
- Flux Schnell — fast single-prompt generation
- Nano Banana — multi-input generation with aspect ratio control

**Video Generate**
- Wan 2.2 I2V — image-to-video, 480p/720p
- Wan 2.5 T2V — text-to-video, 720p/1080p
- Google Veo 3.1 — text/image-to-video with audio, 720p/1080p
- Runway Gen-4.5 — text/image-to-video, 720p
- Runway Gen4 Turbo — image-to-video, 720p
- Kling V3 Omni — text/image-to-video with audio, 720p/1080p

**Runway**
- Gen-4 Image / Gen-4 Image Turbo (text-to-image)
- Gen4 Turbo / Gen4 / Gen-4.5 (video tools)

**Speech Generate**
- 25+ voices including Rachel, Drew, Aria, James, Sarah, and more

**Music Generate**
- Output formats: MP3 (standard/high quality), WAV (16kHz–CD quality)
- Configurable length, instrumental-only option

---

## Process

| Node | Icon | In | Out | Description |
|------|------|----|-----|-------------|
| Merge | `arrow.triangle.merge` | 2 | 1 | Concatenate two text inputs |
| Image Process | `slider.horizontal.3` | 1 | 1 | Resize, crop, blur, sharpen, colour adjust, rotate, format convert |
| Image Composite | `square.on.square` | 2 | 1 | Layer two images with blend modes and opacity |
| Background Removal | `person.crop.rectangle` | 1 | 1 | Remove or isolate the background from an image |
| SVG Vectorize | `pencil.and.outline` | 1 | 1 | Convert a raster image to vector SVG |
| Video Restyle | `wand.and.stars` | 3 | 1 | Apply stylistic transformations to video (9 intensity modes) |

---

## Control Flow

| Node | Icon | In | Out | Description |
|------|------|----|-----|-------------|
| If / Else | `arrow.triangle.branch` | 1 | 2 | Branch execution based on string conditions (contains, equals, isEmpty, startsWith, length comparisons, etc.) |

---

## Special

| Node | Icon | In | Out | Description |
|------|------|----|-----|-------------|
| Group | `rectangle.3.group` | Dynamic | Dynamic | Collapse a subgraph of nodes into a single reusable unit |
