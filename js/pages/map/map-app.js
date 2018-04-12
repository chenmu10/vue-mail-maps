export default {
    template: `
    <section class="map-app container">
        <h1>Map App</h1>


    <div class="map-container">
        <h1 class="title is-2">Map-container</h1>
        <input type="text" name="search" placeholder="search">
        <button>My location</button>
        <div class="map">
            <canvas></canvas>
        </div>
    </div>

    <div class="places">
        <h1 class="title is-2">place-list</h1>
        <input type="text" name="search" placeholder="search">
        <div class="places-list">
            <ul>
                <li>loc1</li>
                <li>loc2</li>
            </ul>
        </div>
    </div>

    <div class="place-details">
        <h1 class="title is-2">place-details</h1>
        <form>
            name:
            <input type="text"> lat,lng:
            <input type="text" disabled> description:
            <input type="text"> tag:
            <input type="text"> photos:
            <input type="text">
            <button type="submit">Update</button>
            <button>Delete</button>
            <button>Add to my places</button>
        </form>
    </div>

    
    </section>
    `
}