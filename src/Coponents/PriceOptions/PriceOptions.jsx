import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 60.0,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness classes",
      ],
    },
    {
      id: 2,
      name: "Silver Membership",
      price: 43.0,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Access to pool",
        "Group fitness classes",
        "Sauna and steam room",
      ],
    },
    {
      id: 3,
      name: "Gold Membership",
      price: 80.0,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Access to pool",
        "Group fitness classes",
        "Sauna and steam room",
        "Personal training sessions (2/month)",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl "> Best Price in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
