import type { Locale } from '@/lib/i18n/config';

type RelatedToolCopyMap = Record<string, Record<string, string>>;

const relatedToolCopyEn: RelatedToolCopyMap = {
  'merge-pdf': {
    'split-pdf': 'Need to separate sections after combining files? Split the merged PDF by page range.',
    'compress-pdf': 'Finished merging? Compress the final PDF before email or upload.',
    'pdf-to-docx': 'Need to edit the merged file next? Convert the final PDF into editable Word.',
  },
  'split-pdf': {
    'merge-pdf': 'Need to put selected pages back together? Merge PDF files into one document.',
    'compress-pdf': 'After splitting, compress the smaller PDF for easier email and upload.',
    'pdf-to-jpg': 'Need to share only a few pages visually? Convert selected PDF pages to JPG.',
  },
  'compress-pdf': {
    'merge-pdf': 'Combine several PDFs first, then reduce the final file size for sending.',
    'split-pdf': 'If one large file is still hard to handle, split the PDF into smaller parts.',
    'pdf-to-docx': 'Need both a smaller file and editable content? Convert the PDF to Word next.',
  },
  'jpg-to-pdf': {
    'pdf-to-jpg': 'Need to turn the final PDF back into shareable images? Export pages as JPG.',
    'compress-pdf': 'Created a PDF from photos? Compress it before upload or email.',
    'merge-pdf': 'Need to combine your new image PDF with other PDF documents? Merge them here.',
  },
  'pdf-to-jpg': {
    'jpg-to-pdf': 'Need to turn exported JPG pages back into one PDF? Combine JPG images into a PDF.',
    'compress-pdf': 'If image-heavy PDFs are too large, compress the file before sharing.',
    'pdf-to-docx': 'Need editable text instead of images? Convert the PDF to editable Word.',
  },
  'pdf-to-docx': {
    'compress-pdf': 'Need a smaller original before sending? Compress the PDF for email or upload.',
    'merge-pdf': 'Combine supporting PDFs before converting everything into one editable file.',
    'pdf-to-jpg': 'Need page previews or image snippets instead of Word output? Convert pages to JPG.',
  },
};

const relatedToolCopyZh: RelatedToolCopyMap = {
  'merge-pdf': {
    'split-pdf': '合并完成后还要按章节或页码拆开？可以继续拆分这个 PDF。',
    'compress-pdf': '合并后的文件偏大时，下一步通常就是先压缩再发送或上传。',
    'pdf-to-docx': '如果合并后还要继续改内容，可以把最终 PDF 转成可编辑 Word。',
  },
  'split-pdf': {
    'merge-pdf': '挑出需要的页面后，还可以把这些页面重新合并成一个新文件。',
    'compress-pdf': '拆分后如果还要发邮件或上传，通常可以顺手把文件再压缩一下。',
    'pdf-to-jpg': '只想把部分页面发给别人看时，可以继续把这些页面转成 JPG 图片。',
  },
  'compress-pdf': {
    'merge-pdf': '如果你手上有多个 PDF，先合并再压缩，通常更适合发送和归档。',
    'split-pdf': '文件太大不好处理时，也可以先拆分成几个更小的 PDF 再分别使用。',
    'pdf-to-docx': '既想减小体积又要改文字内容时，可以继续把 PDF 转成 Word。',
  },
  'jpg-to-pdf': {
    'pdf-to-jpg': '如果之后还要把生成的 PDF 页面单独导出，也可以再转回 JPG 图片。',
    'compress-pdf': '照片合成 PDF 后体积偏大时，下一步通常就是先压缩再提交。',
    'merge-pdf': '如果还要和其他 PDF 一起打包发送，可以继续把文件合并起来。',
  },
  'pdf-to-jpg': {
    'jpg-to-pdf': '导出的 JPG 图片如果还要重新整理成一个文件，可以再合成为 PDF。',
    'compress-pdf': '图片较多的 PDF 往往体积更大，发送前可以先压缩原文件。',
    'pdf-to-docx': '如果你需要的是可编辑内容而不是图片，也可以继续转成 Word。',
  },
  'pdf-to-docx': {
    'compress-pdf': '原始 PDF 还要发邮件或上传时，可以先压缩再处理后续流程。',
    'merge-pdf': '如果有附件、补充页或附录，先合并后再统一转 Word 会更顺。',
    'pdf-to-jpg': '如果你只是想导出页面预览或截图素材，也可以继续转成 JPG。',
  },
};

const relatedToolCopyZhTw: RelatedToolCopyMap = {
  'merge-pdf': {
    'split-pdf': '合併完成後還要按章節或頁碼拆開？可以繼續拆分這份 PDF。',
    'compress-pdf': '合併後的檔案偏大時，下一步通常就是先壓縮再傳送或上傳。',
    'pdf-to-docx': '如果合併後還要繼續修改內容，可以把最終 PDF 轉成可編輯 Word。',
  },
  'split-pdf': {
    'merge-pdf': '挑出需要的頁面後，也可以把這些頁面重新合併成一份新文件。',
    'compress-pdf': '拆分後如果還要寄信或上傳，通常可以順手把檔案再壓縮一下。',
    'pdf-to-jpg': '只想把部分頁面傳給別人看時，可以繼續把這些頁面轉成 JPG 圖片。',
  },
  'compress-pdf': {
    'merge-pdf': '如果手上有多份 PDF，先合併再壓縮，通常更適合傳送與歸檔。',
    'split-pdf': '檔案太大不好處理時，也可以先拆成幾份較小的 PDF 再分別使用。',
    'pdf-to-docx': '既想減小體積又要修改文字內容時，可以繼續把 PDF 轉成 Word。',
  },
  'jpg-to-pdf': {
    'pdf-to-jpg': '如果之後還要把生成的 PDF 頁面個別匯出，也可以再轉回 JPG 圖片。',
    'compress-pdf': '照片合成 PDF 後體積偏大時，下一步通常就是先壓縮再提交。',
    'merge-pdf': '如果還要和其他 PDF 一起打包傳送，可以繼續把檔案合併起來。',
  },
  'pdf-to-jpg': {
    'jpg-to-pdf': '匯出的 JPG 圖片如果還要重新整理成一份文件，可以再合成 PDF。',
    'compress-pdf': '圖片較多的 PDF 往往體積更大，傳送前可以先壓縮原始檔案。',
    'pdf-to-docx': '如果你需要的是可編輯內容而不是圖片，也可以繼續轉成 Word。',
  },
  'pdf-to-docx': {
    'compress-pdf': '原始 PDF 還要寄送或上傳時，可以先壓縮再處理後續流程。',
    'merge-pdf': '如果有附件、補充頁或附錄，先合併後再統一轉 Word 會更順。',
    'pdf-to-jpg': '如果你只是想匯出頁面預覽或截圖素材，也可以繼續轉成 JPG。',
  },
};

const relatedToolCopyDe: RelatedToolCopyMap = {
  'merge-pdf': {
    'split-pdf': 'Möchten Sie nach dem Zusammenführen bestimmte Abschnitte wieder trennen? Teilen Sie die fertige PDF nach Seitenbereichen.',
    'compress-pdf': 'Ist die zusammengeführte Datei zu groß? Komprimieren Sie die PDF vor E-Mail oder Upload.',
    'pdf-to-docx': 'Müssen Sie den zusammengeführten Inhalt weiterbearbeiten? Konvertieren Sie die finale PDF in bearbeitbares Word.',
  },
  'split-pdf': {
    'merge-pdf': 'Möchten Sie ausgewählte Seiten wieder als ein Dokument zusammenführen? Kombinieren Sie sie erneut zu einer PDF.',
    'compress-pdf': 'Wenn die geteilte Datei noch per E-Mail oder Portal verschickt werden soll, komprimieren Sie sie im nächsten Schritt.',
    'pdf-to-jpg': 'Wenn Sie nur einzelne Seiten visuell teilen möchten, wandeln Sie diese PDF-Seiten in JPG um.',
  },
  'compress-pdf': {
    'merge-pdf': 'Wenn mehrere PDFs zusammengehören, können Sie sie zuerst zusammenführen und danach die fertige Datei verkleinern.',
    'split-pdf': 'Ist eine Datei trotz Komprimierung noch unhandlich, teilen Sie die PDF in kleinere Abschnitte.',
    'pdf-to-docx': 'Wenn Sie neben kleinerer Dateigröße auch editierbaren Inhalt brauchen, konvertieren Sie die PDF in Word.',
  },
  'jpg-to-pdf': {
    'pdf-to-jpg': 'Möchten Sie die erzeugte PDF später wieder als einzelne Bilder verwenden? Exportieren Sie die Seiten als JPG.',
    'compress-pdf': 'Ist die aus Fotos erzeugte PDF zu groß, komprimieren Sie sie vor dem Upload oder Versand.',
    'merge-pdf': 'Soll die neue Bild-PDF mit weiteren PDF-Dateien kombiniert werden, führen Sie sie hier zusammen.',
  },
  'pdf-to-jpg': {
    'jpg-to-pdf': 'Sollen die exportierten JPG-Seiten wieder zu einer Datei gebündelt werden, erstellen Sie daraus erneut eine PDF.',
    'compress-pdf': 'Bei bildlastigen PDFs ist oft der nächste Schritt, die Originaldatei vor dem Teilen noch zu komprimieren.',
    'pdf-to-docx': 'Wenn Sie statt Bildern editierbaren Inhalt benötigen, konvertieren Sie die PDF in Word.',
  },
  'pdf-to-docx': {
    'compress-pdf': 'Wenn die Original-PDF noch verschickt oder hochgeladen werden muss, verkleinern Sie sie zuerst.',
    'merge-pdf': 'Gibt es Anhänge, Zusatzseiten oder Anlagen, ist es oft sinnvoll, zuerst alles zu einer PDF zusammenzuführen.',
    'pdf-to-jpg': 'Wenn Sie nur Seitenvorschauen oder Bildausschnitte brauchen, exportieren Sie die PDF stattdessen als JPG.',
  },
};

const relatedToolCopyEs: RelatedToolCopyMap = {
  'merge-pdf': {
    'split-pdf': '¿Necesitas separar secciones después de unir archivos? Divide el PDF final por rango de páginas.',
    'compress-pdf': 'Si el archivo unido quedó pesado, el siguiente paso suele ser comprimirlo antes de enviarlo o subirlo.',
    'pdf-to-docx': 'Si después de unirlo todavía necesitas editar el contenido, convierte el PDF final a Word editable.',
  },
  'split-pdf': {
    'merge-pdf': 'Si quieres volver a juntar las páginas seleccionadas en un solo archivo, puedes fusionarlas otra vez.',
    'compress-pdf': 'Si el archivo dividido aún va a enviarse o subirse, conviene comprimirlo en el siguiente paso.',
    'pdf-to-jpg': 'Si solo quieres compartir algunas páginas de forma visual, convierte esas páginas PDF a JPG.',
  },
  'compress-pdf': {
    'merge-pdf': 'Si tienes varios PDF relacionados, puedes unirlos primero y luego reducir el tamaño del archivo final.',
    'split-pdf': 'Si un archivo sigue siendo difícil de manejar, divídelo en partes más pequeñas.',
    'pdf-to-docx': 'Si además de reducir tamaño necesitas editar el contenido, convierte el PDF a Word.',
  },
  'jpg-to-pdf': {
    'pdf-to-jpg': 'Si luego quieres volver a sacar páginas como imágenes, exporta ese PDF como JPG.',
    'compress-pdf': 'Si el PDF creado desde fotos quedó pesado, comprímelo antes de enviarlo o subirlo.',
    'merge-pdf': 'Si necesitas combinar este nuevo PDF de imágenes con otros PDF, fusiónalos aquí.',
  },
  'pdf-to-jpg': {
    'jpg-to-pdf': 'Si después quieres reunir las páginas JPG exportadas en un solo archivo, vuelve a convertirlas en PDF.',
    'compress-pdf': 'Cuando un PDF tiene muchas imágenes, a veces el siguiente paso lógico es comprimir el archivo original.',
    'pdf-to-docx': 'Si necesitas contenido editable en lugar de imágenes, convierte el PDF a Word.',
  },
  'pdf-to-docx': {
    'compress-pdf': 'Si el PDF original todavía debe enviarse o subirse, puedes reducir su tamaño primero.',
    'merge-pdf': 'Si tienes anexos, páginas extra o soportes, suele ser más ordenado unir todo antes de convertirlo a Word.',
    'pdf-to-jpg': 'Si solo necesitas vistas previas de páginas o imágenes rápidas, exporta el PDF como JPG.',
  },
};

const relatedToolCopyFr: RelatedToolCopyMap = {
  'merge-pdf': {
    'split-pdf': 'Besoin de séparer des sections après fusion ? Découpez le PDF final par plage de pages.',
    'compress-pdf': 'Si le fichier fusionné est trop volumineux, l’étape suivante est souvent de le compresser avant envoi.',
    'pdf-to-docx': 'Si vous devez encore modifier le contenu après fusion, convertissez le PDF final en Word éditable.',
  },
  'split-pdf': {
    'merge-pdf': 'Si vous souhaitez regrouper les pages sélectionnées dans un nouveau document, fusionnez-les à nouveau.',
    'compress-pdf': 'Si le fichier découpé doit encore être envoyé ou téléversé, il est souvent utile de le compresser ensuite.',
    'pdf-to-jpg': 'Si vous voulez seulement partager quelques pages sous forme visuelle, convertissez-les en JPG.',
  },
  'compress-pdf': {
    'merge-pdf': 'Si plusieurs PDF vont ensemble, vous pouvez d’abord les fusionner puis réduire la taille du fichier final.',
    'split-pdf': 'Si un PDF reste difficile à manipuler, découpez-le en parties plus petites.',
    'pdf-to-docx': 'Si vous avez besoin d’un fichier plus léger mais aussi modifiable, convertissez le PDF en Word.',
  },
  'jpg-to-pdf': {
    'pdf-to-jpg': 'Si vous devez ensuite réexporter certaines pages comme images, convertissez ce PDF en JPG.',
    'compress-pdf': 'Si le PDF créé à partir de photos est trop lourd, compressez-le avant envoi ou téléversement.',
    'merge-pdf': 'Si vous devez combiner ce nouveau PDF avec d’autres PDF, fusionnez-les ici.',
  },
  'pdf-to-jpg': {
    'jpg-to-pdf': 'Si vous souhaitez regrouper les pages JPG exportées dans un seul fichier, reconvertissez-les en PDF.',
    'compress-pdf': 'Quand un PDF contient beaucoup d’images, l’étape suivante logique est souvent de compresser le fichier source.',
    'pdf-to-docx': 'Si vous avez besoin d’un contenu modifiable plutôt que d’images, convertissez le PDF en Word.',
  },
  'pdf-to-docx': {
    'compress-pdf': 'Si le PDF original doit encore être envoyé ou téléversé, vous pouvez d’abord réduire sa taille.',
    'merge-pdf': 'S’il y a des annexes, pages complémentaires ou pièces jointes, il est souvent plus simple de tout fusionner avant conversion.',
    'pdf-to-jpg': 'Si vous avez seulement besoin d’aperçus de pages ou d’images rapides, exportez plutôt le PDF en JPG.',
  },
};

const relatedToolCopyJa: RelatedToolCopyMap = {
  'merge-pdf': {
    'split-pdf': '結合後に章ごとやページごとへ分け直したい場合は、そのままPDFを分割できます。',
    'compress-pdf': '結合後のファイルが重いときは、送信や提出の前に圧縮するのが次の流れです。',
    'pdf-to-docx': '結合した内容をさらに編集したいなら、最終PDFをWordに変換できます。',
  },
  'split-pdf': {
    'merge-pdf': '選んだページをもう一度ひとつの資料にまとめたい場合は、再度PDFを結合できます。',
    'compress-pdf': '分割後のファイルをまだ送信やアップロードに使うなら、そのまま圧縮しておくと扱いやすくなります。',
    'pdf-to-jpg': '一部のページだけを見せたいときは、そのページをJPG画像として書き出せます。',
  },
  'compress-pdf': {
    'merge-pdf': '関連するPDFが複数あるなら、先に結合してから最終ファイルを軽くする流れも便利です。',
    'split-pdf': '圧縮しても扱いづらい大きなPDFは、小さな単位に分割すると使いやすくなります。',
    'pdf-to-docx': 'サイズを小さくするだけでなく編集もしたいなら、次にWordへ変換できます。',
  },
  'jpg-to-pdf': {
    'pdf-to-jpg': '作成したPDFをあとで画像として再利用したいなら、ページごとにJPGへ変換できます。',
    'compress-pdf': '写真から作ったPDFが重いときは、提出や送信の前に圧縮しておくと安心です。',
    'merge-pdf': '新しく作った画像PDFをほかのPDFとまとめたい場合は、ここから結合できます。',
  },
  'pdf-to-jpg': {
    'jpg-to-pdf': '書き出したJPGページをもう一度ひとつの資料にまとめたい場合は、PDFへ戻せます。',
    'compress-pdf': '画像の多いPDFは容量が大きくなりやすいので、元のPDFを圧縮する流れも自然です。',
    'pdf-to-docx': '画像ではなく編集できる内容が必要なら、PDFをWordに変換できます。',
  },
  'pdf-to-docx': {
    'compress-pdf': '元のPDFをそのまま送る必要があるなら、先に容量を小さくしておくと扱いやすくなります。',
    'merge-pdf': '添付資料や補足ページがあるなら、先にまとめてからWordへ変換すると流れがきれいです。',
    'pdf-to-jpg': 'ページのプレビューや画像素材だけが必要なら、PDFをJPGとして書き出す方法もあります。',
  },
};

const relatedToolCopyKo: RelatedToolCopyMap = {
  'merge-pdf': {
    'split-pdf': '합친 뒤에 다시 구간별로 나눠야 한다면, 이어서 PDF를 분할할 수 있습니다.',
    'compress-pdf': '병합 후 파일이 커졌다면, 보내기나 업로드 전에 압축하는 흐름이 자연스럽습니다.',
    'pdf-to-docx': '합친 내용을 계속 수정해야 한다면, 최종 PDF를 편집 가능한 Word로 바꿀 수 있습니다.',
  },
  'split-pdf': {
    'merge-pdf': '선택한 페이지를 다시 하나의 문서로 묶고 싶다면, 새 PDF로 병합할 수 있습니다.',
    'compress-pdf': '분할한 파일을 아직 보내거나 업로드해야 한다면, 다음 단계로 압축해 두는 편이 좋습니다.',
    'pdf-to-jpg': '몇 페이지만 화면용으로 공유하고 싶다면, 해당 PDF 페이지를 JPG로 변환하면 됩니다.',
  },
  'compress-pdf': {
    'merge-pdf': '관련된 PDF가 여러 개라면 먼저 병합한 뒤 최종 파일을 줄이는 흐름도 잘 맞습니다.',
    'split-pdf': '압축해도 다루기 어렵다면 PDF를 더 작은 단위로 나누는 것도 좋은 다음 단계입니다.',
    'pdf-to-docx': '용량도 줄이고 내용도 수정해야 한다면, 다음으로 Word 변환을 이어갈 수 있습니다.',
  },
  'jpg-to-pdf': {
    'pdf-to-jpg': '만든 PDF를 나중에 다시 이미지로 써야 한다면, 페이지를 JPG로 내보낼 수 있습니다.',
    'compress-pdf': '사진으로 만든 PDF가 크다면 제출이나 전송 전에 압축하는 흐름이 자연스럽습니다.',
    'merge-pdf': '새로 만든 이미지 PDF를 다른 PDF와 함께 묶어야 한다면 여기서 병합할 수 있습니다.',
  },
  'pdf-to-jpg': {
    'jpg-to-pdf': '내보낸 JPG 페이지를 다시 하나의 문서로 정리하려면 PDF로 다시 합칠 수 있습니다.',
    'compress-pdf': '이미지가 많은 PDF는 용량이 커지기 쉬워서, 원본 PDF를 압축하는 다음 단계도 잘 맞습니다.',
    'pdf-to-docx': '이미지보다 편집 가능한 내용이 필요하다면 PDF를 Word로 변환할 수 있습니다.',
  },
  'pdf-to-docx': {
    'compress-pdf': '원본 PDF를 그대로 보내거나 업로드해야 한다면 먼저 파일 크기를 줄여 둘 수 있습니다.',
    'merge-pdf': '첨부 자료나 보조 페이지가 있다면 먼저 하나로 합친 뒤 Word로 바꾸는 편이 더 깔끔합니다.',
    'pdf-to-jpg': '페이지 미리보기나 이미지 자료만 필요하다면 PDF를 JPG로 내보내는 방법도 잘 맞습니다.',
  },
};

const relatedToolCopyPt: RelatedToolCopyMap = {
  'merge-pdf': {
    'split-pdf': 'Se precisar separar partes depois de juntar arquivos, você pode dividir o PDF final por páginas.',
    'compress-pdf': 'Se o arquivo unido ficou grande, o próximo passo costuma ser comprimir antes de enviar ou subir.',
    'pdf-to-docx': 'Se ainda precisar editar o conteúdo depois de juntar tudo, converta o PDF final em Word editável.',
  },
  'split-pdf': {
    'merge-pdf': 'Se quiser reunir as páginas selecionadas em um novo arquivo, você pode mesclá-las novamente.',
    'compress-pdf': 'Se o arquivo dividido ainda vai ser enviado ou enviado para um portal, vale comprimir em seguida.',
    'pdf-to-jpg': 'Se você quer compartilhar só algumas páginas visualmente, converta essas páginas em JPG.',
  },
  'compress-pdf': {
    'merge-pdf': 'Se vários PDFs fazem parte do mesmo material, você pode juntar tudo primeiro e depois reduzir o tamanho final.',
    'split-pdf': 'Se o PDF ainda estiver difícil de lidar, dividir em partes menores pode ser o próximo passo mais útil.',
    'pdf-to-docx': 'Se além de reduzir o tamanho você também precisa editar o conteúdo, converta o PDF em Word.',
  },
  'jpg-to-pdf': {
    'pdf-to-jpg': 'Se depois você quiser reaproveitar páginas como imagens, pode exportar o PDF novamente em JPG.',
    'compress-pdf': 'Se o PDF criado a partir de fotos ficou pesado, comprimir antes de enviar ou subir costuma ajudar.',
    'merge-pdf': 'Se precisar juntar esse novo PDF de imagens com outros PDFs, você pode mesclar tudo aqui.',
  },
  'pdf-to-jpg': {
    'jpg-to-pdf': 'Se quiser reorganizar as páginas JPG exportadas em um único arquivo, você pode voltar tudo para PDF.',
    'compress-pdf': 'Quando o PDF tem muitas imagens, o próximo passo natural às vezes é comprimir o arquivo original.',
    'pdf-to-docx': 'Se você precisa de conteúdo editável em vez de imagens, converta o PDF em Word.',
  },
  'pdf-to-docx': {
    'compress-pdf': 'Se o PDF original ainda precisa ser enviado ou submetido, você pode reduzir o tamanho antes.',
    'merge-pdf': 'Se houver anexos, páginas extras ou complementos, costuma ser mais organizado juntar tudo antes de converter.',
    'pdf-to-jpg': 'Se você só precisa de prévias de página ou imagens rápidas, exportar o PDF em JPG pode fazer mais sentido.',
  },
};

export function getRelatedToolDescriptionOverride(
  locale: Locale,
  currentToolId: string,
  relatedToolId: string
): string | undefined {
  const localeMap =
    locale === 'zh'
      ? relatedToolCopyZh
      : locale === 'zh-TW'
        ? relatedToolCopyZhTw
        : locale === 'de'
          ? relatedToolCopyDe
          : locale === 'es'
            ? relatedToolCopyEs
            : locale === 'fr'
              ? relatedToolCopyFr
              : locale === 'ja'
                ? relatedToolCopyJa
                : locale === 'ko'
                  ? relatedToolCopyKo
                  : locale === 'pt'
                    ? relatedToolCopyPt
        : locale === 'en'
          ? relatedToolCopyEn
          : undefined;

  return localeMap?.[currentToolId]?.[relatedToolId];
}
