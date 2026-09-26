// The classic art (pixel font, faces) and sound are plain scripts that expect
// globals; load them first and publish them so the classic menu code works.
import ART from '../../../js/art.js';
import SND from '../../../js/sound.js';
window.ART = ART;
window.SND = SND;
export { ART, SND };
