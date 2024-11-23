import { HTMLAttributes } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

import Counter from '@/components/counter'

type PropTypes = Readonly<HTMLAttributes<HTMLElement>>

function Code({ children, ...props }: PropTypes) {
  const codeHTML = highlight(children as string)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function H2({ children, ...props }: PropTypes) {
  return (
    <h2 className='title my-6' {...props}>
      {children}
    </h2>
  )
}
function P({ children, ...props }: PropTypes) {
  return (
    <p className='my-4 text-base text-muted-foreground' {...props}>
      {children}
    </p>
  )
}
function A({ children, ...props }: PropTypes) {
  return (
    <a className='cursor-pointer text-foreground underline' {...props}>
      {children}
    </a>
  )
}

const components = {
  code: Code,
  h2: H2,
  p: P,
  a: A,
  Counter,
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps,
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
