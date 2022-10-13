import { Envelope, Lock } from 'phosphor-react'

import { Logo } from './Logo'
import { Text } from './components/Text'
import { Button } from './components/Button'
import { Heading } from './components/Heading'
import { Checkbox } from './components/Checkbox'
import { TextField } from './components/TextField'

import './styles/global.css'

export function App() {
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

        <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-9'>
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
