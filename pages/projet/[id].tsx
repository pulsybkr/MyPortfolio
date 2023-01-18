/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import data from '../../fichier.json'
import { useRef, useEffect, useState } from 'react';
import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import router, { useRouter } from 'next/router'


function Page({ post }) {
  const router = useRouter();
  useEffect(()=>{
    AOS.init(); // initialize AOS animation
  }, [])
  return(
    <>
        <h1>{post.title}</h1>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: data.map((post) => ({ params: { id: post.id.toString() } })),
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const {id} = params
  const post = data[id]
  return {
    props: {
      post: post
    }
  }
}

export default Page;