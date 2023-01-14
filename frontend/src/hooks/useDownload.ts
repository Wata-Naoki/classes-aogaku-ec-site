import axios from 'axios';
import fileDownload from 'js-file-download';

export const useDownload = () => {
  const handleDownload = async (pdfUrl: string, title: string) => {
    const res = await axios.get(pdfUrl, {
      responseType: 'blob',
    });
    fileDownload(res.data, `${title}.pdf`);
  };
  return { handleDownload };
};
