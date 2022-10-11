import { readable, writable } from 'svelte/store'
import type { ethers } from 'ethers'
import io from 'socket.io-client'

type Nullable<T> = T | null

const development = process.env.NODE_ENV === 'development'
export const socket = readable(development ? io(':2000') : io())

export const connectModalOpen = writable(false)

export const provider = writable<Nullable<ethers.providers.Web3Provider>>(null)
export const address = writable<Nullable<string>>(null)
export const chainId = writable<Nullable<number>>(null)

export const cuid = writable<Nullable<string>>(null)
export const tickets = writable<Nullable<number>>(null)
export const tokens = writable()
