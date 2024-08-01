import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Card, Modal, Text, TextInput } from "@mantine/core";
import { bankSchema, TBankSchema } from "@/schemas";

import { useCartStore } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDisclosure } from "@mantine/hooks";
import { FieldValues, useForm } from "react-hook-form";

const BankCard = () => {
  const router = useRouter();
  const resetStore = useCartStore((state) => state.resetStore);
  const [opened, { open, close }] = useDisclosure(false);

  const renderModal = () => {
    return (
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        radius="lg"
      >
        <Card className="justify-center items-center">
          <Card.Section my="xl">
            <Text fz="xl" fw={600}>
              Your order has been placed!
            </Text>
          </Card.Section>
          <Card.Section p="xl">
            <Image
              src={"/undraw_completed.svg"}
              width={200}
              height={300}
              alt="Order complete"
            />
          </Card.Section>
          <Card.Section p="xl">
            <Button
              fullWidth
              variant="gradient"
              gradient={{ from: "red", to: "pink", deg: 145 }}
              onClick={(e) => {
                reset();
                resetStore();
                close();
                router.push("/");
              }}
            >
              Back to shopping
            </Button>
          </Card.Section>
        </Card>
      </Modal>
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TBankSchema>({
    resolver: zodResolver(bankSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    open();
  };

  return (
    <>
      {renderModal()}
      <Card shadow="sm" radius="md" padding="xl" visibleFrom="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text fz="lg" fw={600}>
            Card details
          </Text>
          <TextInput
            placeholder="Card number"
            type="number"
            {...register("cardNumber")}
            error={errors.cardNumber?.message as string}
            mt="sm"
          />
          <div className="mt-4 flex flex-row gap-4">
            <TextInput
              placeholder="Month"
              type="number"
              {...register("month")}
              error={errors.month?.message as string}
            />
            <TextInput
              placeholder="Year"
              type="number"
              {...register("year")}
              error={errors.year?.message as string}
            />
            <TextInput
              placeholder="PIN"
              type="number"
              {...register("pin")}
              error={errors.pin?.message as string}
            />
          </div>
          <Button type="submit" mt="lg" fullWidth loading={isSubmitting}>
            Place order
          </Button>
        </form>
      </Card>
    </>
  );
};

export default BankCard;
