import React, { useEffect, useState } from 'react';
import mammoth from 'mammoth';
import Link from 'next/link';

const DocxPage: React.FC = () => {
  const [docxContent, setDocxContent] = useState<string>('');

  useEffect(() => {
    // Path to your DOCX file
    // const docxPath: string = '/Desktop/project/Works/node_modules/.bin/mammoth';
    const docxPath: string = '../page.tsx';

    // Use the mammoth library to convert the DOCX to HTML
    mammoth.convertToHtml({ })
      .then((result) => {
        setDocxContent(result.value);
      })
      .catch((error) => {
        console.error('Error converting DOCX to HTML:', error);
      });
  }, []);

  return (
    <div>
      <h1>Documentation Link Below:</h1>
      <Link href='https://works-ochre.vercel.app/' target='_blank'>Documentation</Link>
    </div>
  );
};

export default DocxPage;
