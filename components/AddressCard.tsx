import { addressSchema, TAddressSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Group, Text, TextInput } from "@mantine/core";
import { FieldValues, useForm } from "react-hook-form";
import { useCartStore } from "@/store";

const AddressCard = () => {
  const setCheckoutState = useCartStore((state) => state.setCheckoutState);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAddressSchema>({
    resolver: zodResolver(addressSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCheckoutState("PENDING");
    reset();
  };

  return (
    <Card shadow="sm" radius="md" padding="xl" visibleFrom="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text fz="lg" fw={600}>
          Name
        </Text>
        <Group mt="sm" gap="md">
          <TextInput
            placeholder="First name"
            {...register("firstName")}
            error={errors.firstName?.message as string}
          />
          <TextInput placeholder="Last name" {...register("lastName")} />
        </Group>
        <Text fz="lg" fw={600} mt="lg">
          Address
        </Text>
        <Group mt="sm" gap="md">
          <TextInput
            placeholder="Number"
            type="number"
            {...register("number")}
            error={errors.number?.message as string}
          />
          <TextInput
            placeholder="Street name"
            {...register("street")}
            error={errors.street?.message as string}
          />
        </Group>
        <Group mt="sm" gap="md">
          <TextInput
            placeholder="City"
            {...register("city")}
            error={errors.city?.message as string}
          />
          <TextInput placeholder="State" {...register("state")} />
        </Group>
        <Group mt="sm" gap="md">
          <TextInput
            placeholder="Country"
            {...register("country")}
            error={errors.country?.message as string}
          />
          <TextInput
            placeholder="Postal code"
            {...register("postal")}
            error={errors.postal?.message as string}
            type="number"
          />
        </Group>
        <Button type="submit" mt="lg" fullWidth loading={isSubmitting}>
          Continue
        </Button>
      </form>
    </Card>
  );
};

export default AddressCard;
