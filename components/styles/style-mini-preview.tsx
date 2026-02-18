import type { StyleVisualClass } from "@/components/styles/design-style-showcases";

export function StyleMiniPreview({
  visualClass,
}: {
  visualClass: StyleVisualClass;
}) {
  if (visualClass === "style-flat") {
    return (
      <div className="mini-showcase">
        <div className="mini-row">
          <div className="mini-pill" />
          <div className="mini-pill w-16" />
        </div>
        <div className="mini-grid mini-grid-2">
          <div className="mini-block h-10" />
          <div className="mini-block h-10" />
        </div>
        <div className="mini-stack">
          <div className="mini-line" />
          <div className="mini-line w-5/6" />
          <div className="mini-line w-3/4" />
        </div>
      </div>
    );
  }

  if (visualClass === "style-glass") {
    return (
      <div className="mini-showcase">
        <div className="mini-grid mini-grid-3">
          <div className="mini-block h-12" />
          <div className="mini-block h-12" />
          <div className="mini-block h-12" />
        </div>
        <div className="mini-row mt-2">
          <div className="mini-circle" />
          <div className="mini-line w-2/3" />
        </div>
      </div>
    );
  }

  if (visualClass === "style-neobrutal") {
    return (
      <div className="mini-showcase">
        <div className="mini-block h-12" />
        <div className="mini-grid mini-grid-2 mt-2">
          <div className="mini-block h-8" />
          <div className="mini-block h-8" />
        </div>
        <div className="mini-row mt-2">
          <div className="mini-pill w-20" />
          <div className="mini-pill w-14" />
        </div>
      </div>
    );
  }

  if (visualClass === "style-editorial") {
    return (
      <div className="mini-showcase">
        <div className="mini-line h-3 w-2/3" />
        <div className="mini-stack mt-2">
          <div className="mini-line" />
          <div className="mini-line w-11/12" />
          <div className="mini-line w-10/12" />
        </div>
        <div className="mini-block mt-3 h-9" />
      </div>
    );
  }

  if (visualClass === "style-bento") {
    return (
      <div className="mini-showcase mini-bento">
        <div className="mini-grid mini-grid-bento">
          <div className="mini-block h-9" />
          <div className="mini-block h-9" />
          <div className="mini-block col-span-2 h-20" />
          <div className="mini-block h-20" />
        </div>
      </div>
    );
  }

  if (visualClass === "style-data") {
    return (
      <div className="mini-showcase">
        <div className="mini-grid mini-grid-3">
          <div className="mini-block h-10" />
          <div className="mini-block h-10" />
          <div className="mini-block h-10" />
        </div>
        <div className="mini-stack mt-2">
          <div className="mini-line" />
          <div className="mini-line w-4/5" />
          <div className="mini-line w-3/5" />
        </div>
      </div>
    );
  }

  if (visualClass === "style-pixel") {
    return (
      <div className="mini-showcase">
        <div className="mini-grid mini-grid-3">
          <div className="mini-block h-8" />
          <div className="mini-block h-8" />
          <div className="mini-block h-8" />
        </div>
        <div className="mini-grid mini-grid-2 mt-2">
          <div className="mini-block h-12" />
          <div className="mini-block h-12" />
        </div>
      </div>
    );
  }

  if (visualClass === "style-bauhaus") {
    return (
      <div className="mini-showcase">
        <div className="mini-grid mini-grid-2">
          <div className="mini-block h-14" />
          <div className="mini-block h-14" />
        </div>
        <div className="mini-row mt-2">
          <div className="mini-circle" />
          <div className="mini-pill w-20" />
        </div>
      </div>
    );
  }

  if (visualClass === "style-utilitarian") {
    return (
      <div className="mini-showcase">
        <div className="mini-stack">
          <div className="mini-line" />
          <div className="mini-line" />
          <div className="mini-line w-11/12" />
          <div className="mini-line w-10/12" />
        </div>
        <div className="mini-grid mini-grid-2 mt-2">
          <div className="mini-block h-8" />
          <div className="mini-block h-8" />
        </div>
      </div>
    );
  }

  if (visualClass === "style-rebus") {
    return (
      <div className="mini-showcase">
        <div className="mini-grid mini-grid-3">
          <div className="mini-circle" />
          <div className="mini-pill w-10" />
          <div className="mini-circle" />
        </div>
        <div className="mini-grid mini-grid-2 mt-2">
          <div className="mini-block h-9" />
          <div className="mini-block h-9" />
        </div>
      </div>
    );
  }

  if (visualClass === "style-popart") {
    return (
      <div className="mini-showcase">
        <div className="mini-block h-11" />
        <div className="mini-row mt-2">
          <div className="mini-pill w-20" />
          <div className="mini-pill w-12" />
        </div>
        <div className="mini-grid mini-grid-3 mt-2">
          <div className="mini-block h-8" />
          <div className="mini-block h-8" />
          <div className="mini-block h-8" />
        </div>
      </div>
    );
  }

  if (visualClass === "style-memphis") {
    return (
      <div className="mini-showcase">
        <div className="mini-grid mini-grid-2">
          <div className="mini-block h-12" />
          <div className="mini-block h-12" />
        </div>
        <div className="mini-row mt-2">
          <div className="mini-circle" />
          <div className="mini-line w-2/3" />
        </div>
      </div>
    );
  }

  return (
    <div className="mini-showcase">
      <div className="mini-block h-10" />
      <div className="mini-line mt-2" />
    </div>
  );
}
