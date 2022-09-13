import { Input, Navbar } from '@nextui-org/react'
import React from 'react'
import { SearchIcon } from './SearchIcon'

export const SearchBar = () => {
  return (
    <Navbar.Item
        css={{
            "@xsMax": {
            w: "100%",
            jc: "center",
            },
        }}
    >
        <Input
            clearable
            contentLeft={
            <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
            }
            contentLeftStyling={false}
            css={{
            w: "100%",
            "@xsMax": {
                mw: "300px",
            },
            "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
            },
            }}
            placeholder="Search..."
        />
    </Navbar.Item>
  )
}
