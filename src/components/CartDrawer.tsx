import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50" 
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-display text-lg text-foreground">Item added to your cart</h2>
          <button 
            onClick={closeCart}
            className="p-1 hover:opacity-70 transition-opacity"
          >
            <X className="w-5 h-5 text-foreground" strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-body text-sm text-muted-foreground mb-4">Your cart is empty</p>
              <button 
                onClick={closeCart}
                className="font-body text-xs text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div 
                  key={`${item.id}-${item.size}`} 
                  className="flex gap-4 pb-4 border-b border-border"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-secondary overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-body text-xs text-foreground mb-1">{item.name}</h3>
                    <p className="font-body text-xs text-muted-foreground mb-2">Size: {item.size}</p>
                    <p className="font-body text-xs text-foreground">${item.price.toFixed(2)} AUD</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="inline-flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-body text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="p-1 hover:opacity-70 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="font-body text-xs text-foreground">Subtotal</span>
              <span className="font-body text-sm text-foreground">${totalPrice.toFixed(2)} AUD</span>
            </div>
            <p className="font-body text-[10px] text-muted-foreground">
              Taxes and shipping calculated at checkout
            </p>

            {/* Action Buttons */}
            <Link
              to="/cart"
              onClick={closeCart}
              className="block w-full h-12 border border-foreground text-foreground font-body text-xs tracking-wide hover:bg-foreground hover:text-background transition-all flex items-center justify-center"
            >
              View cart
            </Link>
            <button className="w-full h-12 bg-primary text-primary-foreground font-body text-xs tracking-wide hover:opacity-85 transition-opacity">
              Check out
            </button>
            <button 
              onClick={closeCart}
              className="w-full font-body text-xs text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity py-2"
            >
              Continue shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
