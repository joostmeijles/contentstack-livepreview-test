'use client'

import ContentstackLivePreview from "@contentstack/live-preview-utils";

import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams();

  ContentstackLivePreview.setConfigFromParams(searchParams.toString());

  return <>
    <div>Q: {searchParams.toString()}</div>
    <div>Hash: {ContentstackLivePreview.hash}</div>
    <div>SDK version: {ContentstackLivePreview.getSdkVersion()}</div>
  </>;
}
