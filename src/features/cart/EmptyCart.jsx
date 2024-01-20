import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-8 w-fit rounded-md bg-red-100 p-4 font-semibold text-stone-700">
        Your cart is still empty. Start adding some pizzas 😊
      </p>
    </div>
  );
}

export default EmptyCart;
