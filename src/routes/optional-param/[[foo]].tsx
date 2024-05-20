import { useParams } from '@solidjs/router'

export default function Blog() {
  const params = useParams();
  const a = Object.entries(params).map(([key, value]) => {
    return {key, value}
  })
  console.log(a)
  return (
    <div class="component">
      <p class="file-name">routes/optional-param/[[foo]].jsx</p>
    </div>
  );
}
