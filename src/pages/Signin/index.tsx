import { FormEvent, useState } from "react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock } from "phosphor-react";
import axios from 'axios'

import { Logo } from "../../Logo";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { TextField } from "../../components/TextField";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    axios.post('/sessions', {
      email: "johndoe@email.com",
      password: "123456",
    })

    setIsUserSignedIn(true);
  }

  return (
    <div className='w-screen h-screen bg-gray-800 text-gray-100 overflow-x-hidden'>
      <div className='my-8 h-full w-full flex flex-col items-center justify-center'>
        <header className='flex flex-col items-center'>
          <Logo />

          <Heading size='lg' className='mt-2'>
            Ignite Lab
          </Heading>

          <Text size='lg' className='text-gray-400'>
            Faça login e comece a usar!
          </Text>
        </header>

        <form
          onSubmit={handleSignIn}
          className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-9'
        >
          {isUserSignedIn && (
            <Text>Usuário logado com sucesso!</Text>
          )}

          <label htmlFor="email" className='flex flex-col gap-3'>
            <Text className='font-semibold'>
              Endereço de e-mail
            </Text>

            <TextField.Root>
              <TextField.Icon>
                <Envelope />
              </TextField.Icon>

              <TextField.Input
                id="email"
                type="email"
                placeholder='Digite seu e-mail'
              />
            </TextField.Root>
          </label>

          <label htmlFor="password" className='flex flex-col gap-3'>
            <Text className='font-semibold'>
              Sua senha
            </Text>

            <TextField.Root>
              <TextField.Icon>
                <Lock />
              </TextField.Icon>

              <TextField.Input
                id="password"
                type="password"
                placeholder='********'
              />
            </TextField.Root>
          </label>

          <label className='flex items-center' htmlFor="remember">
            <Checkbox id='remember' />
            <Text size='sm' className='ml-2'>Lembrar de mim por 30 dias</Text>
          </label>

          <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
        </form>

        <footer className='flex flex-col items-center gap-4 mt-7'>
          <Text asChild size='sm'>
            <a href="#" className='text-gray-400 underline hover:text-gray-200'>
              Esqueceu sua senha?
            </a>
          </Text>

          <Text asChild size='sm' >
            <a href="#" className='text-gray-400 underline hover:text-gray-200'>
              Não possui conta? Crie uma agora!
            </a>
          </Text>
        </footer>
      </div>
    </div>
  )
}