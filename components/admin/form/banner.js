import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function InputNewsBanner({ uid, url, size, onUpload }) {
  const supabase = useSupabaseClient();
  const [bannerUrl, setBannerUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from("news-images")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setBannerUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error);
    }
  }

  const uploadBanner = async (event) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${uid}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("news-images")
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert("Error uploading banner!");
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="grid items-center justify-center mx-auto text-center">
      {bannerUrl ? (
        <Image
          className="mb-2 rounded-full lg:mb-4"
          src={bannerUrl}
          id={"banner"}
          alt="Banner"
          height={size}
          width={size}
        />
      ) : (
        <div />
      )}
      <div className>
        <label>{"Banner"}</label>
        <div className="lg:flex">
          <input
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-borderLight dark:file:bg-borderDark file:text-dark dark:file:text-light hover:file:bg-slate-200 dark:hover:file:bg-slate-600"
            type="file"
            id="single"
            accept="image/*"
            onChange={uploadBanner}
            disabled={uploading}
          />
          <button htmlFor="single">
            {uploading ? "Uploading ..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}
