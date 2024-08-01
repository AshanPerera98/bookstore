import { addressSchema, TAddressSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Address } from "@/interfaces";
import { countries } from "@/constants";
import {
  Button,
  Card,
  Group,
  NativeSelect,
  Text,
  TextInput,
} from "@mantine/core";
import { FieldValues, useForm } from "react-hook-form";
import { useCartStore } from "@/store";

const AddressCard = () => {
  const { setCheckoutState, setAddress } = useCartStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAddressSchema>({
    resolver: zodResolver(addressSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    setAddress(data as Address);
    setCheckoutState("PENDING");
    reset();
  };

  return (
    <Card shadow="sm" radius="md" padding="xl">
      <Group justify="center" align="center" mb="xl">
        <Text fz="lg" fw={600}>
          Shipping Details
        </Text>
      </Group>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text fz="lg">Name</Text>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <TextInput
            placeholder="First name"
            {...register("firstName")}
            error={errors.firstName?.message as string}
          />
          <TextInput placeholder="Last name" {...register("lastName")} />
        </div>
        <Text fz="lg" mt="xl">
          Address
        </Text>
        <div className="mt-4 grid grid-cols-2 gap-4 w-full">
          <TextInput
            placeholder="Number"
            type="string"
            {...register("number")}
            error={errors.number?.message as string}
          />
          <TextInput
            placeholder="Street name"
            {...register("street")}
            error={errors.street?.message as string}
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <TextInput
            placeholder="City"
            {...register("city")}
            error={errors.city?.message as string}
          />
          <TextInput placeholder="State" {...register("state")} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <NativeSelect
            data={countries}
            {...register("country")}
            error={errors.country?.message as string}
          />
          <TextInput
            placeholder="Postal code"
            {...register("postal")}
            error={errors.postal?.message as string}
            type="number"
          />
        </div>
        <Button type="submit" mt="lg" fullWidth loading={isSubmitting}>
          Continue
        </Button>
      </form>
    </Card>
  );
};

export default AddressCard;
