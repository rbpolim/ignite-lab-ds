import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'

import { SignIn } from './index'

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Usuário logado com sucesso!'
          }))
        }),
      ],
    },
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Digitando o e-mail
    userEvent.type(canvas.getByPlaceholderText(/Digite seu e-mail/i), 'johndoe@email.com')
    // Digitando a senha
    userEvent.type(canvas.getByPlaceholderText('********'), '123456')

    // Clicando no botão de login
    userEvent.click(canvas.getByRole('button', { name: /entrar na plataforma/i }))

    // Esperando o teste ser executado
    await waitFor(() => {
      return expect(canvas.getByText('Usuário logado com sucesso!')).toBeInTheDocument()
    })
  }
}
