import * as React from 'react'

import { Navbar } from '../../ui'

export const MainTheme = ({ children }: React.PropsWithChildren<any>) => (
  <>
    <Navbar />
    {children}
  </>
)
