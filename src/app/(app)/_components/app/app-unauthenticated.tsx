import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AppUnauthenticated() {
  return (
    <main className="flex grow flex-col justify-center">
      <section className="container h-full">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-center text-3xl font-bold tracking-tight lg:text-4xl">
                No estás autenticado
              </h1>
              <p className="text-center text-base text-muted-foreground lg:text-lg">
                Si ya tienes una cuenta, por favor{' '}
                <Button
                  variant="link"
                  className="h-fit w-fit p-0 text-base lg:text-lg"
                  asChild
                >
                  <Link href="/login">inicia sesión</Link>
                </Button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
