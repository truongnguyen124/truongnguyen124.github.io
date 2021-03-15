var url = "http://localhost:3000/item"
axios.get(url).then(function(res) {
    var items = res.data;
    render(items);
})

function render(items) {
    $.each(items, function(index, value) {
        var name = value.name
        var pic = value.pic
        var price = value.price
        var sale_price = value.price * (0 - value.sale)

        $('.item-1-wrap').append(`
            <div class="item-1">
                <div class=item-pic>
                    <img class="item-1-img" src="./images/${value.pic}.jpg" alt="">
                    ${render_sale_label(value.sale)}
                    <i class="fas fa-heart heart-btn"></i>
                    <div class="round-btn">
                        <img class="btn-icon" src="./images/icons-awesome-glass.svg" alt="" srcset="">
                    </div>
                </div>
                <div class="item-details">
                    <p class="name">샤또 마고 매그넘</p>
                    <div class="price-tag">
                        <p class="price">259,000원</p>
                        <p class="price-old"></p>
                        <p class="price-sale"></p>
                    </div>
                </div>
            </div>
        `)
    })
}

function render_sale_label(sale_price) {
    if (sale_price > 0) {
        return `
                <div class="corner-label"></div>
                <p class="sale-text">Sale</p>`
    } else {
        return ''
    }
}