'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/core/auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LoginForm } from './login-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Login() {
  const { check } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (check) router.push('/')
  }, [check, router])

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-center text-2xl">Iniciar sesión</CardTitle>
        <CardDescription className="text-center">
          Introduzca su correo electrónico a continuación para iniciar sesión en
          su cuenta.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <LoginForm />
        <Button variant="link" className="h-fit p-0" asChild>
          <Link href="/password/forgot">¿Olvidaste tu contraseña?</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
