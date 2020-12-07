const data = [
    {
      id: "94",
      name: "Điện thoại iPhone XS cũ (64GB, 256GB) - Fullbox",
      image:
        "https://firebasestorage.googleapis.com/v0/b/jsjs-15c57.appspot.com/o/image%2Fiphonexs-max-trang.jpg?alt=media&token=74dd6e4e-5206-4751-af56-28963ec2913c",
      price: 400,
      quantity: 2,
      detail:
        "1. Tặng: Cường lực - Ốp lưng - Tai nghe khi mua BHV  2. Giảm: 100K áp dụng HSSV mua BHV tại 42 phố Vọng  3. Mua: Dán cường lực 5D chỉ 30K  4. Giảm 100K khi mua BHV và đặt hàng tại: Đây  5. Cam kết bán iPhone RẺ nhất VN: CLICK"
    },
    {
      id: "95",
      name: "Điện thoại iPhone XR Cũ (64GB, 128GB) - Fullbox",
      image:
        "https://firebasestorage.googleapis.com/v0/b/jsjs-15c57.appspot.com/o/image%2Fmc-xr-yellow.jpg?alt=media&token=19d994b4-89a4-4c90-91af-c09c5ba987c6",
      price: 500,
      quantity: 4,
      detail:
        'iPhone XR là mẫu smartphone được biết đến là chiếc smartphone có doanh số cao nhất năm 2019, vậy để xem với số tiền bỏ ra, các bạn nên ẵm ngay một em iPhone Xr hay cố thêm "tí" để lên mẫu iPhone mới nhất - iPhone 11 hay không nhé!'
    },
    {
      id: "96",
      name: "Điên thoại iPhone X",
      image:
        "https://firebasestorage.googleapis.com/v0/b/jsjs-15c57.appspot.com/o/image%2Fiphone-x-white.jpg?alt=media&token=31dd2ebe-d808-4a11-bb4b-79bf0a75e636",
      price: 100,
      quantity: 4,
      detail:
        'Thân máy được làm to hơn và bao bọc bởi kim loại bóng bẩy kết hợp với kính cường lực ở cả mặt trước và sau lưng mà theo Apple là "kính cứng nhất trong lịch sử điện thoại".'
    },
    {
      id: "97",
      name: "Điện thoại iPhone 11 (64GB, 256GB)",
      image:
        "https://firebasestorage.googleapis.com/v0/b/jsjs-15c57.appspot.com/o/image%2Fiphone-11-3.jpg?alt=media&token=4ad5e803-4515-473a-a78f-f8cff4dca1fe",
      price: 1000,
      quantity: 10,
      detail:
        "Màu sắc trẻ trung hướng đến đối tượng khách hàng trẻ, năng động, những màu sắc nhẹ nhàng hướng đến đối tượng khách hàng nữ. Tất cả tạo nên điểm nhấn khác biệt trên iPhone 11  năm nay."
    },
    {
      id: "98",
      name: "Điện thoại iPhone 11 Pro Max",
      image:
        "https://firebasestorage.googleapis.com/v0/b/jsjs-15c57.appspot.com/o/image%2Fgold.jpg?alt=media&token=8cbfbfa3-2e3f-4284-9408-ee024704aaa9",
      price: 5000,
      quantity: 23,
      detail:
        "Apple đã chính thức ra mắt iPhone 11 Pro Max sau nhiều rò rỉ trước đó, tuy vẫn giữ thiết kế cũ nhưng sản phẩm được nâng cấp rất nhiều bên trong"
    },
    {
      id: "99",
      name: "Điện thoại iPhone 11 Pro  (64GB, 256GB)",
      image:
        "https://firebasestorage.googleapis.com/v0/b/jsjs-15c57.appspot.com/o/image%2Fiphone-11-pro.jpg?alt=media&token=e7e03862-c68e-4846-aed5-5de9ce9239fd",
      price: 7000,
      quantity: 3,
      detail:
        "Máy sở hữu thiết kế 2 mặt kính và khung viền bằng thép không rỉ tương tự các mẫu iPhone thế hệ trước. Điểm khác biệt là iPhone 11 Pro có mặt lưng kính nhám chứ không còn bóng bảy, điều này khiến cảm giác cầm nắm iPhone 11 Pro trở nên rất đã."
    },
    {
      id: "100",
      name: "Điện thoại iPhone 6S (16GB, 32GB, 64GB)",
      image:
        "https://firebasestorage.googleapis.com/v0/b/jsjs-15c57.appspot.com/o/image%2Fiphone-6s-pink.jpg?alt=media&token=3e3bc6c3-f858-4cfd-9dc9-85b6e7299f9c",
      price: 1000,
      quantity: 3,
      detail:
        "iPhone 6S  vẫn trung thành với thiết kế kim loại nguyên khối sang trọng tương tự như các thế hệ trước nhưng được gia tăng về độ cứng, trọng lượng chỉ 143g nên mang đến một tổng thể hoàn hảo khi cầm nắm và sử dụng."
    },
    {
      id: "101",
      name: "Điện thoại iPhone 7 (32GB, 128GB)",
      image:
        "https://firebasestorage.googleapis.com/v0/b/jsjs-15c57.appspot.com/o/image%2Fiphone7-red.jpg?alt=media&token=cb4ca265-ecd7-4cb9-bbdd-331252a66fab",
      price: 1500,
      quantity: 15,
      detail:
        "iPhone 7 không có nhiều thay đổi về thiết kế so với người tiền nhiệm iPhone 6S. Máy sở hữu thiết kế vuông vức với viền màn hình được làm mỏng tối đa xuống 0.5 mm cho cảm giác màn hình được mở rộng hơn khi sử dụng. "
    }
  ];
  const content = document.querySelector("#content");
console.log(content);
const result = data
    .map((product, index) => {
            return `<tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td><img width = 50px src="${product.image}"></td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>${product.detail}</td>
    </tr>`;
        }
    ).join("");
    const total = data.reduce(function (accumulator, currentValue){
        return accumulator + currentValue.price * currentValue.quantity
    },0);
    document.querySelector("#total").innerHTML = total;
content.innerHTML = result;
  