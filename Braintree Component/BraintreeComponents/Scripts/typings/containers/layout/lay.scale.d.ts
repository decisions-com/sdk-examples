/**
 * https://sites.google.com/decisions.com/devteam/dev-guidelines-and-cookbooks/layout-containers/scale
 */
declare namespace $DP.Containers.Utils {
    var RESPECT_SCALE: boolean;
    /**
     * should we correct size due to scale
     * because the height of the table row in subpixels may be greater than in pixels
     * we noticed this behavior is only in chrome
     */
    function shouldCorrectSizeOnScale(): boolean;
    /**
     * the try to respect pixel ratio for fixed pixeled size
     // it is just -1 pixel now, might be changed to formula relative to pixel ratio
     * @param size - $DP.UI.Size, computed by us
     */
    function correctSizeOnScale(size: $DP.UI.Size): $DP.UI.Size;
}
