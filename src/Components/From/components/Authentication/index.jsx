import {
    ActionIcon,
    Anchor,
    Button,
    Divider,
    Group,
    Paper,
    PasswordInput,
    Space,
    Stack,
    Text,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconMail } from "@tabler/icons";
import { IconLock } from "@tabler/icons";
import { FacebookButton } from "../socialButtom/facebook";
import { GoogleButton } from "../socialButtom/google";
export function Authentication() {
    const form = useForm({
        initialValues: {
            email: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <Paper radius="md" p="xl" style={{ width: "420px" }}>
            <Text size="lg" weight={"bold"}>
                Welcome Back!
            </Text>
            <Space h="xs" />
            <Text size="xs" c="dimmed" weight={"normal"}>
                start managing your finance faster and better
            </Text>
            <Space h="30px" />
            <form onSubmit={form.onSubmit(() => { })}>
                <Stack>
                    <TextInput
                        required
                        icon={
                            <ActionIcon p={4} color={"blue"} bg="white" variant="outline">
                                <IconMail />
                            </ActionIcon>
                        }
                        size="md"
                        variant="filled"
                        placeholder="Example@gmail.com"
                        value={form.values.email}
                        onChange={(event) =>
                            form.setFieldValue("email", event.currentTarget.value)
                        }
                        error={form.errors.email && "Invalid email"}
                    />

                    <PasswordInput
                        required
                        icon={
                            <ActionIcon p={4} color={"blue"} bg="white" variant="outline">
                                <IconLock />
                            </ActionIcon>
                        }
                        size="md"
                        variant="filled"
                        placeholder="Your password"
                        value={form.values.password}
                        onChange={(event) =>
                            form.setFieldValue("password", event.currentTarget.value)
                        }
                        error={
                            form.errors.password &&
                            "Password should include at least 6 characters"
                        }
                    />
                </Stack>

                <Group position="right" fw={700} mt="sm">
                    <Anchor
                        onClick={(event) => event.preventDefault()}
                        size="xs"
                    >
                        Forgot password?
                    </Anchor>
                    <Button size="md" fullWidth mt="sm">
                        Login
                    </Button>
                </Group>
                <Space h="lg" />
                <Divider
                    c="dimmed"
                    label="Or continue with email"
                    labelPosition="center"
                    my="lg"
                />
                <Space h="lg" />
                <Group grow mb="md" mt="md">
                    <GoogleButton >
                        Google
                    </GoogleButton>
                    <FacebookButton >
                        Facebook
                    </FacebookButton>
                </Group>
            </form>
            <Text align="center" c="dimmed" size="xs">
                Don't have an account?
                <Anchor
                    weight={700}
                    ml={5}
                    onClick={(event) => event.preventDefault()}
                >
                    SignUp
                </Anchor>
            </Text>
        </Paper>
    );
}
export default Authentication
