export const Components = {
  Center: ({ children }: { children: React.ReactNode }) => (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flex: 1,
        height: "80vh",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  ),
  Heading: ({ children }: { children: React.ReactNode }) => (
    <h2
      style={{
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      {children}
    </h2>
  ),
  MyIcon: () => (
    <img
      src="/naturalclar.jpg"
      style={{
        height: 400,
        width: 400,
        borderRadius: 200,
      }}
    />
  ),
  Splitter: ({ type = "vertical" }: { type: "vertical" | "horizontal" }) => (
    <div
      style={{
        backgroundColor: "white",
        height: type === "horizontal" ? 1 : "100%",
        margin: type === "horizontal" ? "24px 0" : "0 24px",
        width: type === "horizontal" ? "100%" : 1,
      }}
    />
  ),
  Note: ({ children }: { children: React.ReactNode }) => (
    <p
      style={{
        display: "none",
      }}
    >
      {children}
    </p>
  ),
  Row: ({ children }: { children: React.ReactNode }) => (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  ),
  Text: ({
    bold = false,
    children,
  }: {
    bold?: boolean;
    children: React.ReactNode;
  }) => (
    <div
      style={{
        color: "white",
        fontSize: "1rem",
        fontWeight: bold ? "bold" : "normal",
      }}
    >
      {children}
    </div>
  ),
  SubText: ({
    bold = false,
    children,
  }: {
    bold?: boolean;
    children: React.ReactNode;
  }) => (
    <div
      style={{
        color: "white",
        marginLeft: 80,
        fontSize: "0.8rem",
        fontWeight: bold ? "bold" : "normal",
        opacity: 0.8,
      }}
    >
      {children}
    </div>
  ),
  Link: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "yellow",
        fontSize: "1rem",
        margin: 0,
      }}
    >
      {children}
    </a>
  ),
  GPTImage: ({
    src,
    alt,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <img
        src={src}
        alt={"*AIで生成された画像"}
        style={{
          height: 400,
          width: 400,
          objectFit: "contain",
        }}
      />
      <p style={{ margin: 0, fontSize: 12, opacity: 0.4 }}>
        *AIで生成された画像
      </p>
    </div>
  ),
  Image: ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: string | number;
    height: string | number;
  }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          height,
          width,
          objectFit: "contain",
        }}
      />
    </div>
  ),

  Column: ({
    justify = "start",
    align = "center",
    children,
  }: {
    justify: "center" | "start" | "end";
    align: "left" | "center" | "right";
    children: React.ReactNode;
  }) => {
    const alignItems =
      align === "left"
        ? "flex-start"
        : align === "center"
        ? "center"
        : "flex-end";

    const justifyContent =
      justify === "center"
        ? "center"
        : justify === "start"
        ? "flex-start"
        : "flex-end";

    return (
      <div
        style={{
          alignItems,
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent,
          height: "100%",
          gap: 24,
        }}
      >
        {children}
      </div>
    );
  },
};
