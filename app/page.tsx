// app\page.tsx
import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import React from 'react';

export default function Home() {
  return (
    <div className="prose dark:prose-invert mx-auto">
      <h1 className="text-3xl font-bold text-center my-8 animate-fade-in-down">The Newest Articles</h1>
      {allPosts.map((post, index) => (
        <article key={post._id} className={`animate-fade-in-up delay-${index * 100}`}>
          <Link href={post.slug} passHref>
            <h2 className="cursor-pointer hover:underline">{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
