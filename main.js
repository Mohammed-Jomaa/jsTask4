function getProducts() {
    axios.get("https://dummyjson.com/products").then(
        (response) => {
            const products = response.data.products; 
            console.log(products);

            const product = products.map(function(product){
                return `
                    <div class="card">
                        <div class="image">
                            <img src=${product.thumbnail} />
                        </div>
                        <h2>${product.title}</h2>
                        <a href="#">price = ${product.price}$</a>
                        <br/>
                        <span> category : ${product.category}</span>
                    </div>
                `;
            }).join("");

            document.querySelector(".product").innerHTML = product;
        },
        (error) => {
            console.log(error);
        }
    );
}

getProducts();
