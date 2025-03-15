import Product from "../models/products.js";

export const getAll = async(req, res)=>{
  try {
    const products = await Product.find();
    if(products.length === 0){
     return res.status(404).json({
         message: "Không tìm thấy sản phẩm"
     })
    }
    return res.status(200).json({
     message : "Lấy danh sách sản phẩm thành công",
     datas : products,
    })
  } catch (error) {
    return res.status(500).json({
        message :  error
    })
  }
}


export const getDetail =async(req, res)=>{
    try {
      const product = await Product.findById(req.params.id);
      if(!product){
       return res.status(404).json({
           message: "Không tìm thấy sản phẩm"
       })
      }
      return res.status(200).json({
       message : "Lấy sản phẩm thành công",
       datas : product,
      })
    } catch (error) {
      return res.status(500).json({
          message :  error
      })
    }
  }

export const create = async(req, res)=> {
    try {
        const product = await Product.create(req.body)
        console.log("📌 Dữ liệu nhận từ client:", req.body);
        if(!product){
            return res.status(404).json({
                message: "Thêm sản phẩm thất bại"
            })
        }
        return res.status(200).json({
            message : "Thêm sản phẩm thành công",
            datas : product,
        })
    } catch (error) {
        return res.status(500).json({
           message: error.message || "Lỗi server"
        })
    }
}

export const update = (req, res)=> {
    res.status(200).json({
        message  :"cap nhat thanh cong"
    })
}

export const remove = (req, res)=> {
    res.status(200).json({
        message  :"Xoa"
    })
}