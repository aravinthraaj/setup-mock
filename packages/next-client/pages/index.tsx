import type { NextPage } from 'next'
import { dummy, dummy2 } from '@setup-mock/business-logic'
import { useDummy } from '@setup-mock/business-logic/dist/hooks/useDummy'

const Home: NextPage = () => {

  const value = useDummy({
    foo: "world",
  });

  return (
    <>
      <div>
        {dummy("HELLO")}
      </div>
      <div>
        {dummy2("HELLO")}
      </div>
      <div>
        {value}
      </div>
    </>
  )
}

export default Home
