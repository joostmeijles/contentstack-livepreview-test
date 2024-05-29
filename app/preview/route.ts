import { NextRequest } from "next/server";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

export async function GET(
    _request: NextRequest, // First parameters needs to be the request
    { params }: { params: string[] },
) {
    console.log(params);
    ContentstackLivePreview.setConfigFromParams(params.toString());

    console.log("hash: ", ContentstackLivePreview.hash);
}