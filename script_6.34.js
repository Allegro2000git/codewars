/*Write a class Block that creates a block
Requirements
The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

Define these methods:

`getWidth()` return the width of the `Block`

`getLength()` return the length of the `Block`

`getHeight()` return the height of the `Block`

`getVolume()` return the volume of the `Block`

`getSurfaceArea()` return the surface area of the `Block`
*/

class Block {
    data = []
    constructor(data) {

        [this.width, this.length, this.height] = data;
    }

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }

    getHeight() {
        return this.height;
    }

    getVolume() {
        return this.width * this.length * this.height;
    }

    getSurfaceArea() {
        const wl = this.width * this.length;
        const lh = this.length * this.height;
        const hw = this.height * this.width;
        return 2 * (wl + lh + hw);
    }
}
