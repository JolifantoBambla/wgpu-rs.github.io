initSidebarItems({"constant":[["CUBE_FACES","A constant array of cube faces in the order they map to the hardware."],["MAX_LEVEL","Maximum accessible mipmap level of an image."]],"enum":[["BorderColor","The border color for `WrapMode::Border` wrap mode."],["CreationError","Pure image object creation error."],["CubeFace","The face of a cube image to do an operation on."],["Filter","How to filter the image when sampling. They correspond to increasing levels of quality, but also cost."],["Kind","Specifies the dimensionality of an image to be allocated, along with the number of mipmap layers and MSAA samples if applicable."],["LayerError","An error associated with selected image layer."],["Layout","Specifies options for how memory for an image is arranged. These are hints to the GPU driver and may or may not have actual performance effects, but describe constraints on how the data may be used that a program must obey. They do not specify how channel values or such are laid out in memory; the actual image data is considered opaque."],["ReductionMode","Specifies how the image texels in the filter kernel are reduced to a single value."],["TileKind","The type of tile to check for with `get_tile_size`."],["Tiling","Image tiling modes."],["ViewCreationError","Error creating an `ImageView`."],["ViewKind","Specifies the kind/dimensionality of an image view."],["WrapMode","Specifies how image coordinates outside the range `[0, 1]` are handled."]],"fn":[["get_tile_size","Tile or block size for sparse binding"]],"struct":[["Access","Bitflags to describe how memory in an image or buffer can be accessed."],["Extent","Describes the size of an image, which may be up to three dimensional."],["FormatProperties","Image format properties."],["FramebufferAttachment","Description of a framebuffer attachment."],["Lod","A wrapper for the LOD level of an image. Needed so that we can implement Eq and Hash for it."],["Offset","An offset into an `Image` used for image-to-image copy operations.  All offsets are in texels, and specifying offsets other than 0 for dimensions that do not exist is undefined behavior – for example, specifying a `z` offset of `1` in a two-dimensional image."],["PackedColor","A wrapper for an RGBA color with 8 bits per texel, encoded as a u32."],["SamplerDesc","Specifies how to sample from an image.  These are all the parameters available that alter how the GPU goes from a coordinate in an image to producing an actual value from the texture, including filtering/ scaling, wrap mode, etc."],["Subresource","Selector of a concrete subresource in an image."],["SubresourceFootprint","Footprint of a subresource in memory."],["SubresourceLayers","A subset of resource layers contained within an image’s level."],["SubresourceRange","A subset of resources contained within an image."],["Usage","TODO: Find out if TRANSIENT_ATTACHMENT + INPUT_ATTACHMENT are applicable on backends other than Vulkan. –AP Image usage flags"],["ViewCapabilities","Capabilities to create views into an image."]],"type":[["Layer","Image layer."],["Level","Image mipmap level."],["NumSamples","Number of MSAA samples."],["Size","Dimension size."],["State","Image state, combining access methods and the image’s layout."],["TexelCoordinate","A texel coordinate in an image."]]});