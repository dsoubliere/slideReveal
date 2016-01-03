# slideReveal
Overlays two nodes and creates a draggable element to reveal one over the other.

## Options
- **direction**: dimension for direction of drag; defaults to 'width'
- **dragArea**: 'padding', in pixels, either side of slider which is also draggable; defaults to '50'
- **buffer**: pixel buffer at either edge of slideReveal to halt slider; defaults to 20
- **toReveal**: selector for descendant to reveal; defaults to '.slideReveal-right'

## Dependencies
- jQuery

## Advantages
- Allows for subheadings and semantic markup; used with '.js' or '.no-js', the two images can have a decent noscript or print fallback.
- The slideReveal slider (button and partition) is made of pseudo-elements
- The slide listeners are bound to the container, and listen for a mousedown within the **dragArea** of the left/top dimension of the **toReveal**. So, other content within the container could dynamically change, or there could be multiple reveals.