import React from 'react'
import { Button, Header, Screen } from '@components'
import { AppRoutesProps } from 'src/routes/navigationType'

export function NutritionRecipeScreen({
  route,
}: AppRoutesProps<'NutritionRecipeScreen'>) {
  const { title } = route.params
  const KEY_GPT = 'Aqui vai key do GPT-3'
  // async function fetchRecipe() {
  //   await fetch('https://api.openai.com/v1/chat/completions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization:
  //         'Bearer',
  //     },
  //     body: JSON.stringify({
  //       model: 'gpt-3.5-turbo',
  //       messages: [
  //         {
  //           role: 'user',
  //           content: `Você é um chefe de cozinha. Me indique uma receita utilizando o ingrediente ${title}.O retorno deve ser realizado em JSON, com os ingredientes no atributo "ingredients" em formato array e as etapas no atributo "steps" em formato array.me informe em forma de array a quantidade de "proteins", "carbohydrates", "fats" e "totalCalories" `,
  //         },
  //       ],
  //       temperature: 0.2,
  //       max_tokens: 100,
  //       top_p: 1,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.choices[0].message.content)
  //     })
  //     .catch(error => {
  //       console.error('Error:', error)
  //     })
  // }

  async function handleGenerate() {
    const prompt = `Você é um chefe de cozinha. Me indique uma receita utilizando o ingrediente frango frito.O retorno deve ser realizado em JSON, com os ingredientes no atributo "ingredients" em formato array e as etapas no atributo "steps" em formato array.me informe em forma de array a quantidade de "proteins", "carbohydrates", "fats" e "totalCalories" `

    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${KEY_GPT}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo-0125',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.2,
        max_tokens: 500,
        top_p: 1,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.choices[0].message.content)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Screen>
      <Header title={title} />
      <Button onPress={handleGenerate} title="Teste" />
    </Screen>
  )
}
