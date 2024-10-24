import { HTMLAttributes } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

import Counter from '@/components/counter'

function Code({ children, ...props }: HTMLAttributes<HTMLElement>) {
  const codeHTML = highlight(children as string)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function H2({ children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <h2 className='title my-6' {...props}>
      {children}
    </h2>
  )
}
function P({ children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <p className='my-4 text-base text-muted-foreground' {...props}>
      {children}
    </p>
  )
}
function A({ children, ...props }: HTMLAttributes<HTMLElement>) {
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
