export default {

    template: `
    <section class="section">
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