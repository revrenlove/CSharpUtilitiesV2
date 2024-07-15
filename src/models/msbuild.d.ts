import * as Primitive from './xml-primitives';

interface BaseType {
    _exists: boolean;
    _namespace: string;
}
interface _ALType extends _TaskType {
    DelaySign: string;
    GenerateFullPaths: string;
    LogStandardErrorAsError: string;
}
interface ALType extends _ALType { constructor: { new(): ALType }; }

type AnalysisLevelType = ("none" | "latest" | "latest-minimum" | "latest-recommended" | "latest-all" | "preview" | "preview-minimum" | "preview-recommended" | "preview-all" | "5.0" | "5.0-minimum" | "5.0-recommended" | "5.0-all" | "6.0" | "6.0-minimum" | "6.0-recommended" | "6.0-all");
interface _AnalysisLevelType extends Primitive._string { content: AnalysisLevelType; }

type AnalysisModeType = ("none" | "default" | "minimum" | "recommended" | "all");
interface _AnalysisModeType extends Primitive._string { content: AnalysisModeType; }

interface _AnalyzerType extends _SimpleItemType {
    /** Relative or absolute path to the assembly (required) */
    Include: string;
}
interface AnalyzerType extends _AnalyzerType { constructor: { new(): AnalyzerType }; }

type AndroidDexToolType = ("d8" | "dx");
interface _AndroidDexToolType extends Primitive._string { content: AndroidDexToolType; }

type AndroidLinkModeType = ("None" | "SdkOnly" | "Full");
interface _AndroidLinkModeType extends Primitive._string { content: AndroidLinkModeType; }

type AndroidLinkToolType = ("r8" | "proguard");
interface _AndroidLinkToolType extends Primitive._string { content: AndroidLinkToolType; }

type AndroidPackageFormatType = ("apk" | "aab");
interface _AndroidPackageFormatType extends Primitive._string { content: AndroidPackageFormatType; }

interface _ApplicationDefinitionType extends _SimpleItemType {
    $CopyToOutputDirectory: ApplicationDefinitionType$CopyToOutputDirectoryType;
    /** Copy file to output directory (optional, default Never) */
    CopyToOutputDirectory?: ApplicationDefinitionTypeCopyToOutputDirectoryType[];
}
interface ApplicationDefinitionType extends _ApplicationDefinitionType { constructor: { new(): ApplicationDefinitionType }; }

type ApplicationDefinitionType$CopyToOutputDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _ApplicationDefinitionType$CopyToOutputDirectoryType extends Primitive._string { content: ApplicationDefinitionType$CopyToOutputDirectoryType; }

type ApplicationDefinitionTypeCopyToOutputDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _ApplicationDefinitionTypeCopyToOutputDirectoryType extends Primitive._string { content: ApplicationDefinitionTypeCopyToOutputDirectoryType; }

type ApplicationHighDpiModeType = ("SystemAware" | "PerMonitorV2" | "PerMonitor" | "DpiUnaware" | "DpiUnawareGdiScaled");
interface _ApplicationHighDpiModeType extends Primitive._string { content: ApplicationHighDpiModeType; }

interface _AppxBundleResourceFileMapsIntermediateType extends _SimpleItemType { }
interface AppxBundleResourceFileMapsIntermediateType extends _AppxBundleResourceFileMapsIntermediateType { constructor: { new(): AppxBundleResourceFileMapsIntermediateType }; }

interface _AppxHashUriType extends _SimpleItemType { }
interface AppxHashUriType extends _AppxHashUriType { constructor: { new(): AppxHashUriType }; }

interface _AppxManifestImageFileNameQueryType extends _SimpleItemType { }
interface AppxManifestImageFileNameQueryType extends _AppxManifestImageFileNameQueryType { constructor: { new(): AppxManifestImageFileNameQueryType }; }

interface _AppxManifestMetadataType extends _SimpleItemType { }
interface AppxManifestMetadataType extends _AppxManifestMetadataType { constructor: { new(): AppxManifestMetadataType }; }

interface _AppxManifestType extends _SimpleItemType {
    /** Display in user interface (optional, boolean). */
    Visible?: string;
}
interface AppxManifestType extends _AppxManifestType { constructor: { new(): AppxManifestType }; }

interface _AppxPackagePayloadType extends _SimpleItemType { }
interface AppxPackagePayloadType extends _AppxPackagePayloadType { constructor: { new(): AppxPackagePayloadType }; }

export type architecture = string;
type _architecture = Primitive._string;

interface _AspNetCompilerType extends _TaskType {
    AllowPartiallyTrustedCallers: string;
    Clean: string;
    Debug: string;
    DelaySign: string;
    FixedNames: string;
    Force: string;
    LogStandardErrorAsError: string;
    Updateable: string;
}
interface AspNetCompilerType extends _AspNetCompilerType { constructor: { new(): AspNetCompilerType }; }

interface _AssignCultureType extends _TaskType { }
interface AssignCultureType extends _AssignCultureType { constructor: { new(): AssignCultureType }; }

interface _AssignProjectConfigurationType extends _TaskType {
    ResolveConfigurationPlatformUsingMappings: string;
}
interface AssignProjectConfigurationType extends _AssignProjectConfigurationType { constructor: { new(): AssignProjectConfigurationType }; }

interface _AssignTargetPathType extends _TaskType { }
interface AssignTargetPathType extends _AssignTargetPathType { constructor: { new(): AssignTargetPathType }; }

interface _AxImpType extends _TaskType {
    DelaySign: string;
    GenerateSource: string;
    LogStandardErrorAsError: string;
    NoLogo: string;
    Silent: string;
    Verbose: string;
}
interface AxImpType extends _AxImpType { constructor: { new(): AxImpType }; }

// export type boolean = string;
type _boolean = Primitive._string;

interface _BootstrapperFileType extends _SimpleItemType {
    /** Display in user interface (optional, boolean) */
    Visible?: string[];
}
interface BootstrapperFileType extends _BootstrapperFileType { constructor: { new(): BootstrapperFileType }; }

interface _BscmakeType extends _SimpleItemType { }
interface BscmakeType extends _BscmakeType { constructor: { new(): BscmakeType }; }

interface _CallTargetType extends _TaskType {
    RunEachTargetSeparately: string;
    UseResultsCache: string;
}
interface CallTargetType extends _CallTargetType { constructor: { new(): CallTargetType }; }

/** Groups When and Otherwise elements */
interface _ChooseType extends BaseType {
    /** Optional expression. Used to identify or order system and user elements */
    Label?: string;
    Otherwise?: OtherwiseType;
    When: WhenType[];
}
export interface ChooseType extends _ChooseType { constructor: { new(): ChooseType }; }
export var ChooseType: { new(): ChooseType };

interface _ClCompileType extends _SimpleItemType {
    CompileAsManaged?: ClCompileTypeCompileAsManagedType[];
    PrecompiledHeader?: ClCompileTypePrecompiledHeaderType[];
}
interface ClCompileType extends _ClCompileType { constructor: { new(): ClCompileType }; }

interface _ClCompileTypeCompileAsManagedType extends Primitive._string { }
interface ClCompileTypeCompileAsManagedType extends _ClCompileTypeCompileAsManagedType { constructor: { new(): ClCompileTypeCompileAsManagedType }; }

interface _ClCompileTypePrecompiledHeaderType extends Primitive._string { }
interface ClCompileTypePrecompiledHeaderType extends _ClCompileTypePrecompiledHeaderType { constructor: { new(): ClCompileTypePrecompiledHeaderType }; }

interface _ClIncludeType extends _SimpleItemType { }
interface ClIncludeType extends _ClIncludeType { constructor: { new(): ClIncludeType }; }

interface _CLType extends _TaskType {
    BrowseInformation: string;
    BufferSecurityCheck: string;
    CreateHotpatchableImage: string;
    DisableLanguageExtensions: string;
    EnableFiberSafeOptimizations: string;
    EnablePREfast: string;
    ExpandAttributedSource: string;
    FloatingPointExceptions: string;
    ForceConformanceInForLoopScope: string;
    FunctionLevelLinking: string;
    GenerateXMLDocumentationFiles: string;
    IgnoreStandardIncludePath: string;
    IntrinsicFunctions: string;
    LogStandardErrorAsError: string;
    MinimalRebuild: string;
    MinimalRebuildFromTracking: string;
    MultiProcessorCompilation: string;
    OmitDefaultLibName: string;
    OmitFramePointers: string;
    OpenMPSupport: string;
    PreprocessKeepComments: string;
    PreprocessSuppressLineNumbers: string;
    PreprocessToFile: string;
    RuntimeTypeInfo: string;
    ShowIncludes: string;
    SkippedExecution: string;
    SmallerTypeCheck: string;
    StringPooling: string;
    SuppressStartupBanner: string;
    TrackFileAccess: string;
    TreatWarningAsError: string;
    TreatWChar_tAsBuiltInType: string;
    UndefineAllPreprocessorDefinitions: string;
    UseFullPaths: string;
    UseUnicodeForAssemblerListing: string;
    WholeProgramOptimization: string;
}
interface CLType extends _CLType { constructor: { new(): CLType }; }

interface _CodeAnalysisDependentAssemblyPathsType extends _SimpleItemType {
    /** A fully qualified path to a directory containing reference assemblies to be used by Code Analysis. */
    Include: string;
}
interface CodeAnalysisDependentAssemblyPathsType extends _CodeAnalysisDependentAssemblyPathsType { constructor: { new(): CodeAnalysisDependentAssemblyPathsType }; }

interface _CodeAnalysisDictionaryType extends _SimpleItemType {
    /** Semicolon-separated list of Code Analysis custom dictionaries. Wildcards are allowed. */
    Include: string;
}
interface CodeAnalysisDictionaryType extends _CodeAnalysisDictionaryType { constructor: { new(): CodeAnalysisDictionaryType }; }

interface _CodeAnalysisImportType extends _SimpleItemType {
    /** Semicolon-separated list of Code Analysis projects (*.fxcop) or reports to import. Wildcards are allowed. */
    Include: string;
}
interface CodeAnalysisImportType extends _CodeAnalysisImportType { constructor: { new(): CodeAnalysisImportType }; }

interface _CodeAnalysisType extends _TaskType {
    ApplyLogFileXsl: string;
    ForceOutput: string;
    GenerateSuccessFile: string;
    IgnoreGeneratedCode: string;
    IgnoreInvalidTargets: string;
    OutputToConsole: string;
    OverrideRuleVisibilities: string;
    Quiet: string;
    SearchGlobalAssemblyCache: string;
    SuccessFile: string;
    Summary: string;
    TreatWarningsAsErrors: string;
    UpdateProject: string;
}
interface CodeAnalysisType extends _CodeAnalysisType { constructor: { new(): CodeAnalysisType }; }

interface _CombinePathType extends _TaskType { }
interface CombinePathType extends _CombinePathType { constructor: { new(): CombinePathType }; }

interface _COMFileReferenceType extends _SimpleItemType { }
interface COMFileReferenceType extends _COMFileReferenceType { constructor: { new(): COMFileReferenceType }; }

interface _ComFilesOutputGroupOutputsType extends _SimpleItemType { }
interface ComFilesOutputGroupOutputsType extends _ComFilesOutputGroupOutputsType { constructor: { new(): ComFilesOutputGroupOutputsType }; }

interface _CompileType extends _SimpleItemType {
    $CopyToOutputDirectory: CompileType$CopyToOutputDirectoryType;
    /** Semi-colon separated list of source files (wildcards are allowed) */
    Include?: string;
    /** Whether file was generated from another file (boolean) */
    AutoGen?: string[];
    CopyToOutputDirectory?: CompileTypeCopyToOutputDirectoryType[];
    /** Display in user interface (optional, boolean) */
    Visible?: string[];
}
interface CompileType extends _CompileType { constructor: { new(): CompileType }; }

type CompileType$CopyToOutputDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _CompileType$CopyToOutputDirectoryType extends Primitive._string { content: CompileType$CopyToOutputDirectoryType; }

type CompileTypeCopyToOutputDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _CompileTypeCopyToOutputDirectoryType extends Primitive._string { content: CompileTypeCopyToOutputDirectoryType; }

interface _COMReferenceType extends _SimpleItemType {
    /** COM component name */
    Include?: string;
    /** Whether the types in this reference need to embedded into the target assembly - interop assemblies only (optional, boolean) */
    EmbedInteropTypes?: string[];
    /** Is it isolated (boolean) */
    Isolated?: string[];
}
interface COMReferenceType extends _COMReferenceType { constructor: { new(): COMReferenceType }; }

interface _ContentType extends _SimpleItemType {
    $CopyToOutputDirectory: ContentType$CopyToOutputDirectoryType;
    /** Semi-colon separated list of content files (wildcards are allowed) */
    Include?: string;
    /** Copy file to output directory (optional, default Never) */
    CopyToOutputDirectory?: ContentTypeCopyToOutputDirectoryType[];
    /** Copy file to publish directory (optional, default Never) */
    CopyToPublishDirectory?: ContentTypeCopyToPublishDirectoryType[];
    /** Display in user interface (optional, boolean) */
    Visible?: string[];
}
interface ContentType extends _ContentType { constructor: { new(): ContentType }; }

type ContentType$CopyToOutputDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _ContentType$CopyToOutputDirectoryType extends Primitive._string { content: ContentType$CopyToOutputDirectoryType; }

type ContentTypeCopyToOutputDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _ContentTypeCopyToOutputDirectoryType extends Primitive._string { content: ContentTypeCopyToOutputDirectoryType; }

type ContentTypeCopyToPublishDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _ContentTypeCopyToPublishDirectoryType extends Primitive._string { content: ContentTypeCopyToPublishDirectoryType; }

interface _ConvertToAbsolutePathType extends _TaskType { }
interface ConvertToAbsolutePathType extends _ConvertToAbsolutePathType { constructor: { new(): ConvertToAbsolutePathType }; }

interface _CopyLocalFilesOutputGroupOutputType extends _SimpleItemType { }
interface CopyLocalFilesOutputGroupOutputType extends _CopyLocalFilesOutputGroupOutputType { constructor: { new(): CopyLocalFilesOutputGroupOutputType }; }

interface _CopyType extends _TaskType {
    OverwriteReadOnlyFiles: string;
    SkipUnchangedFiles: string;
    UseHardlinksIfPossible: string;
    UseSymboliclinksIfPossible: string;
}
interface CopyType extends _CopyType { constructor: { new(): CopyType }; }

interface _CopyWinmdArtifactsOutputGroupOutputsType extends _SimpleItemType { }
interface CopyWinmdArtifactsOutputGroupOutputsType extends _CopyWinmdArtifactsOutputGroupOutputsType { constructor: { new(): CopyWinmdArtifactsOutputGroupOutputsType }; }

interface _CPPCleanType extends _TaskType {
    DoDelete: string;
}
interface CPPCleanType extends _CPPCleanType { constructor: { new(): CPPCleanType }; }

interface _CreateAppStoreContainerType extends _TaskType { }
interface CreateAppStoreContainerType extends _CreateAppStoreContainerType { constructor: { new(): CreateAppStoreContainerType }; }

interface _CreateCSharpManifestResourceNameType extends _TaskType {
    PrependCultureAsDirectory: string;
}
interface CreateCSharpManifestResourceNameType extends _CreateCSharpManifestResourceNameType { constructor: { new(): CreateCSharpManifestResourceNameType }; }

interface _CreateItemType extends _TaskType {
    PreserveExistingMetadata: string;
}
interface CreateItemType extends _CreateItemType { constructor: { new(): CreateItemType }; }

interface _CreatePriConfigXmlForFullIndexType extends _CreatePriConfigXmlTaskType { }
interface CreatePriConfigXmlForFullIndexType extends _CreatePriConfigXmlForFullIndexType { constructor: { new(): CreatePriConfigXmlForFullIndexType }; }

interface _CreatePriConfigXmlForSplittingType extends _CreatePriConfigXmlWithPackagingElementTaskType { }
interface CreatePriConfigXmlForSplittingType extends _CreatePriConfigXmlForSplittingType { constructor: { new(): CreatePriConfigXmlForSplittingType }; }

interface _CreatePriConfigXmlTaskType extends _TaskType {
    ConvertDotsToSlashes: string;
}
export interface CreatePriConfigXmlTaskType extends _CreatePriConfigXmlTaskType { constructor: { new(): CreatePriConfigXmlTaskType }; }
export var CreatePriConfigXmlTaskType: { new(): CreatePriConfigXmlTaskType };

interface _CreatePriConfigXmlWithPackagingElementTaskType extends _CreatePriConfigXmlTaskType { }
export interface CreatePriConfigXmlWithPackagingElementTaskType extends _CreatePriConfigXmlWithPackagingElementTaskType { constructor: { new(): CreatePriConfigXmlWithPackagingElementTaskType }; }
export var CreatePriConfigXmlWithPackagingElementTaskType: { new(): CreatePriConfigXmlWithPackagingElementTaskType };

interface _CreatePriFilesForPortableLibrariesType extends _TaskType { }
interface CreatePriFilesForPortableLibrariesType extends _CreatePriFilesForPortableLibrariesType { constructor: { new(): CreatePriFilesForPortableLibrariesType }; }

interface _CreatePropertyType extends _TaskType { }
interface CreatePropertyType extends _CreatePropertyType { constructor: { new(): CreatePropertyType }; }

interface _CreateVisualBasicManifestResourceNameType extends _TaskType {
    PrependCultureAsDirectory: string;
}
interface CreateVisualBasicManifestResourceNameType extends _CreateVisualBasicManifestResourceNameType { constructor: { new(): CreateVisualBasicManifestResourceNameType }; }

interface _CscType extends _TaskType {
    AllowUnsafeBlocks: string;
    CheckForOverflowUnderflow: string;
    DelaySign: string;
    EmitDebugInformation: string;
    GenerateFullPaths: string;
    LogStandardErrorAsError: string;
    NoConfig: string;
    NoLogo: string;
    NoStandardLib: string;
    NoWin32Manifest: string;
    Optimize: string;
    TreatWarningsAsErrors: string;
    UseHostCompilerIfAvailable: string;
    Utf8Output: string;
}
interface CscType extends _CscType { constructor: { new(): CscType }; }

interface _CustomBuildStepType extends _SimpleItemType { }
interface CustomBuildStepType extends _CustomBuildStepType { constructor: { new(): CustomBuildStepType }; }

type DebugTypeType = ("none" | "pdbonly" | "embedded" | "portable" | "full");
interface _DebugTypeType extends Primitive._string { content: DebugTypeType; }

interface _DeleteType extends _TaskType {
    TreatErrorsAsWarnings: string;
}
interface DeleteType extends _DeleteType { constructor: { new(): DeleteType }; }

interface _DotNetCliToolReferenceType extends _SimpleItemType {
    /** Package name of the tool. This may differ from its associated reference package name. */
    Include: string;
    /** Version of dependency */
    Version?: string;
}
interface DotNetCliToolReferenceType extends _DotNetCliToolReferenceType { constructor: { new(): DotNetCliToolReferenceType }; }

interface _DownloadFileType extends _TaskType { }
interface DownloadFileType extends _DownloadFileType { constructor: { new(): DownloadFileType }; }

interface _EmbeddedResourceType extends _SimpleItemType {
    $CopyToOutputDirectory: EmbeddedResourceType$CopyToOutputDirectoryType;
    /** Semi-colon separated list of resource files (wildcards are allowed) */
    Include?: string;
    CopyToOutputDirectory?: EmbeddedResourceTypeCopyToOutputDirectoryType[];
    /** Display in user interface (optional, boolean) */
    Visible?: string[];
}
interface EmbeddedResourceType extends _EmbeddedResourceType { constructor: { new(): EmbeddedResourceType }; }

type EmbeddedResourceType$CopyToOutputDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _EmbeddedResourceType$CopyToOutputDirectoryType extends Primitive._string { content: EmbeddedResourceType$CopyToOutputDirectoryType; }

type EmbeddedResourceTypeCopyToOutputDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _EmbeddedResourceTypeCopyToOutputDirectoryType extends Primitive._string { content: EmbeddedResourceTypeCopyToOutputDirectoryType; }

interface _ErrorType extends _TaskType { }
interface ErrorType extends _ErrorType { constructor: { new(): ErrorType }; }

interface _ExecType extends _TaskType {
    IgnoreExitCode: string;
    IgnoreStandardErrorWarningFormat: string;
    LogStandardErrorAsError: string;
}
interface ExecType extends _ExecType { constructor: { new(): ExecType }; }

interface _ExpandPayloadDirectoriesType extends _TaskType { }
interface ExpandPayloadDirectoriesType extends _ExpandPayloadDirectoriesType { constructor: { new(): ExpandPayloadDirectoriesType }; }

interface _ExpandPriContentType extends _ToolTaskType { }
interface ExpandPriContentType extends _ExpandPriContentType { constructor: { new(): ExpandPriContentType }; }

interface _ExtractHashAlgorithmIdType extends _TaskType { }
interface ExtractHashAlgorithmIdType extends _ExtractHashAlgorithmIdType { constructor: { new(): ExtractHashAlgorithmIdType }; }

interface _FileAssociationType extends _SimpleItemType {
    /** Display in user interface (optional, boolean) */
    Visible?: string[];
}
interface FileAssociationType extends _FileAssociationType { constructor: { new(): FileAssociationType }; }

interface _FilterOutUnusedLanguagesResourceFileMapsType extends _TaskType { }
interface FilterOutUnusedLanguagesResourceFileMapsType extends _FilterOutUnusedLanguagesResourceFileMapsType { constructor: { new(): FilterOutUnusedLanguagesResourceFileMapsType }; }

interface _FindAppConfigFileType extends _TaskType { }
interface FindAppConfigFileType extends _FindAppConfigFileType { constructor: { new(): FindAppConfigFileType }; }

interface _FindInListType extends _TaskType {
    CaseSensitive: string;
    FindLastMatch: string;
    MatchFileNameOnly: string;
}
interface FindInListType extends _FindInListType { constructor: { new(): FindInListType }; }

interface _FindUnderPathType extends _TaskType {
    UpdateToAbsolutePaths: string;
}
interface FindUnderPathType extends _FindUnderPathType { constructor: { new(): FindUnderPathType }; }

interface _FormatUrlType extends _TaskType { }
interface FormatUrlType extends _FormatUrlType { constructor: { new(): FormatUrlType }; }

interface _FormatVersionType extends _TaskType { }
interface FormatVersionType extends _FormatVersionType { constructor: { new(): FormatVersionType }; }

interface _FrameworkReferenceType extends _SimpleItemType {
    /** Controls whether the runtime assets of this shared framework can be trimmed by the IL Linker (if PublishTrimmed is true). */
    $IsTrimmable?: string;
    /** Controls whether the app will target the latest patch of the runtime.  Defaults to true for self-contained apps, false otherwise. */
    $TargetLatestRuntimePatch?: string;
}
interface FrameworkReferenceType extends _FrameworkReferenceType { constructor: { new(): FrameworkReferenceType }; }

interface _GenerateApplicationManifestType extends _TaskType {
    HostInBrowser: string;
    LauncherBasedDeployment: string;
    RequiresMinimumFramework35SP1: string;
    UseApplicationTrust: string;
}
interface GenerateApplicationManifestType extends _GenerateApplicationManifestType { constructor: { new(): GenerateApplicationManifestType }; }

interface _GenerateAppxManifestType extends _TaskType {
    EnableSigningChecks: string;
    OSMaxVersionTestedReplaceManifestVersion: string;
    OSMinVersionReplaceManifestVersion: string;
    PackageSigningEnabled: string;
}
interface GenerateAppxManifestType extends _GenerateAppxManifestType { constructor: { new(): GenerateAppxManifestType }; }

interface _GenerateAppxPackageRecipeType extends _TaskType { }
interface GenerateAppxPackageRecipeType extends _GenerateAppxPackageRecipeType { constructor: { new(): GenerateAppxPackageRecipeType }; }

interface _GenerateAppxSymbolPackageType extends _TaskType { }
interface GenerateAppxSymbolPackageType extends _GenerateAppxSymbolPackageType { constructor: { new(): GenerateAppxSymbolPackageType }; }

interface _GenerateBootstrapperType extends _TaskType {
    ApplicationRequiresElevation: string;
    CopyComponents: string;
    Validate: string;
}
interface GenerateBootstrapperType extends _GenerateBootstrapperType { constructor: { new(): GenerateBootstrapperType }; }

interface _GenerateDeploymentManifestType extends _TaskType {
    CreateDesktopShortcut: string;
    DisallowUrlActivation: string;
    Install: string;
    LauncherBasedDeployment: string;
    MapFileExtensions: string;
    TrustUrlParameters: string;
    UpdateEnabled: string;
}
interface GenerateDeploymentManifestType extends _GenerateDeploymentManifestType { constructor: { new(): GenerateDeploymentManifestType }; }

interface _GenerateLauncherType extends _TaskType { }
interface GenerateLauncherType extends _GenerateLauncherType { constructor: { new(): GenerateLauncherType }; }

interface _GeneratePriConfigurationFilesType extends _TaskType { }
interface GeneratePriConfigurationFilesType extends _GeneratePriConfigurationFilesType { constructor: { new(): GeneratePriConfigurationFilesType }; }

interface _GenerateProjectArchitecturesFileType extends _TaskType { }
interface GenerateProjectArchitecturesFileType extends _GenerateProjectArchitecturesFileType { constructor: { new(): GenerateProjectArchitecturesFileType }; }

interface _GenerateProjectPriFileType extends _ToolTaskType { }
interface GenerateProjectPriFileType extends _GenerateProjectPriFileType { constructor: { new(): GenerateProjectPriFileType }; }

interface _GenerateResourceType extends _TaskType {
    ExecuteAsTool: string;
    ExtractResWFiles: string;
    MinimalRebuildFromTracking: string;
    NeverLockTypeAssemblies: string;
    PublicClass: string;
    TrackFileAccess: string;
    UseSourcePath: string;
}
interface GenerateResourceType extends _GenerateResourceType { constructor: { new(): GenerateResourceType }; }

interface _GenerateTrustInfoType extends _TaskType { }
interface GenerateTrustInfoType extends _GenerateTrustInfoType { constructor: { new(): GenerateTrustInfoType }; }

interface _GenericItemType extends _SimpleItemType { }
export interface GenericItemType extends _GenericItemType { constructor: { new(): GenericItemType }; }
export var GenericItemType: { new(): GenericItemType };

interface _GenericPropertyType extends BaseType {
    /** Optional expression evaluated to determine whether the property should be evaluated */
    Condition?: string;
    /** Optional expression. Used to identify or order system and user elements */
    Label?: string;
}
export interface GenericPropertyType extends _GenericPropertyType { constructor: { new(): GenericPropertyType }; }
export var GenericPropertyType: { new(): GenericPropertyType };

interface _GetAppxBundlePlatformsType extends _TaskType { }
interface GetAppxBundlePlatformsType extends _GetAppxBundlePlatformsType { constructor: { new(): GetAppxBundlePlatformsType }; }

interface _GetAssemblyIdentityType extends _TaskType { }
interface GetAssemblyIdentityType extends _GetAssemblyIdentityType { constructor: { new(): GetAssemblyIdentityType }; }

interface _GetDefaultResourceLanguageType extends _TaskType { }
interface GetDefaultResourceLanguageType extends _GetDefaultResourceLanguageType { constructor: { new(): GetDefaultResourceLanguageType }; }

interface _GetFileHashType extends _TaskType { }
interface GetFileHashType extends _GetFileHashType { constructor: { new(): GetFileHashType }; }

interface _GetFrameworkPathType extends _TaskType { }
interface GetFrameworkPathType extends _GetFrameworkPathType { constructor: { new(): GetFrameworkPathType }; }

interface _GetFrameworkSdkPackagesType extends _TaskType { }
interface GetFrameworkSdkPackagesType extends _GetFrameworkSdkPackagesType { constructor: { new(): GetFrameworkSdkPackagesType }; }

interface _GetFrameworkSdkPathType extends _TaskType { }
interface GetFrameworkSdkPathType extends _GetFrameworkSdkPathType { constructor: { new(): GetFrameworkSdkPathType }; }

interface _GetOutputFileNameType extends _TaskType { }
interface GetOutputFileNameType extends _GetOutputFileNameType { constructor: { new(): GetOutputFileNameType }; }

interface _GetPackageArchitectureType extends _TaskType { }
interface GetPackageArchitectureType extends _GetPackageArchitectureType { constructor: { new(): GetPackageArchitectureType }; }

interface _GetReferenceAssemblyPathsType extends _TaskType { }
interface GetReferenceAssemblyPathsType extends _GetReferenceAssemblyPathsType { constructor: { new(): GetReferenceAssemblyPathsType }; }

interface _GetResolvedSDKReferencesOutputType extends _SimpleItemType { }
interface GetResolvedSDKReferencesOutputType extends _GetResolvedSDKReferencesOutputType { constructor: { new(): GetResolvedSDKReferencesOutputType }; }

interface _GetSdkPropertyValueType extends _TaskType { }
interface GetSdkPropertyValueType extends _GetSdkPropertyValueType { constructor: { new(): GetSdkPropertyValueType }; }

interface _GetSdkToolFullPathType extends _TaskType { }
interface GetSdkToolFullPathType extends _GetSdkToolFullPathType { constructor: { new(): GetSdkToolFullPathType }; }

interface _GetWindowsDesktopSdkDirType extends _TaskType { }
interface GetWindowsDesktopSdkDirType extends _GetWindowsDesktopSdkDirType { constructor: { new(): GetWindowsDesktopSdkDirType }; }

type ImplicitUsingsType = ("enable" | "true" | "disable");
interface _ImplicitUsingsType extends Primitive._string { content: ImplicitUsingsType; }

export type importance = string;
type _importance = Primitive._string;

/** Groups import definitions */
interface _ImportGroupType extends BaseType {
    /** Optional expression evaluated to determine whether the ImportGroup should be used */
    Condition?: string;
    /** Optional expression. Used to identify or order system and user elements */
    Label?: string;
    Import?: ImportType[];
}
export interface ImportGroupType extends _ImportGroupType { constructor: { new(): ImportGroupType }; }
export var ImportGroupType: { new(): ImportGroupType };

/** Declares that the contents of another project file should be inserted at this location */
interface _ImportType extends BaseType {
    /** Optional expression evaluated to determine whether the import should occur */
    Condition?: string;
    /** Optional expression. Used to identify or order system and user elements */
    Label?: string;
    /** Optional expression used to specify the minimum SDK version required by the referring import */
    MinimumVersion?: string;
    /** Project file to import */
    Project: string;
    /** Name of the SDK which contains the project file to import */
    Sdk?: string;
    /** Optional expression used to specify the version of the SDK referenced by this import */
    Version?: string;
}
export interface ImportType extends _ImportType { constructor: { new(): ImportType }; }
export var ImportType: { new(): ImportType };

interface _InternalsVisibleToType extends _SimpleItemType {
    /** The name of the friend assembly to make internal types and members visible to. */
    Include: string;
    /** Optional public key associated with the strong name signature of the friend assembly. */
    Key?: string;
}
interface InternalsVisibleToType extends _InternalsVisibleToType { constructor: { new(): InternalsVisibleToType }; }

interface _IsAssemblyType extends _TaskType { }
interface IsAssemblyType extends _IsAssemblyType { constructor: { new(): IsAssemblyType }; }

/** Groups item metadata definitions */
interface _ItemDefinitionGroupType extends BaseType {
    /** Optional expression evaluated to determine whether the ItemDefinitionGroup should be used */
    Condition?: string;
    /** Optional expression. Used to identify or order system and user elements */
    Label?: string;
    Item?: ItemProxyType[];
    Link?: LinkItem[];
    PostBuildEvent?: PostBuildEventItem[];
    PreBuildEvent?: PreBuildEventItem[];
    ResourceCompile?: ResourceCompile[];
}
export interface ItemDefinitionGroupType extends _ItemDefinitionGroupType { constructor: { new(): ItemDefinitionGroupType }; }
export var ItemDefinitionGroupType: { new(): ItemDefinitionGroupType };

/** Groups item list definitions */
interface _ItemGroupType extends BaseType {
    /** Optional expression evaluated to determine whether the ItemGroup should be used */
    Condition?: string;
    /** Optional expression. Used to identify or order system and user elements */
    Label?: string;
    Item?: ItemProxyType[];
    Link?: LinkItem[];
    PostBuildEvent?: PostBuildEventItem[];
    PreBuildEvent?: PreBuildEventItem[];
    ResourceCompile?: ResourceCompile[];
}
export interface ItemGroupType extends _ItemGroupType { constructor: { new(): ItemGroupType }; }
export var ItemGroupType: { new(): ItemGroupType };

interface _ItemProxyType extends BaseType {
    AppxBundleResourceFileMapsIntermediate?: AppxBundleResourceFileMapsIntermediateType;
    GetResolvedSDKReferencesOutput?: GetResolvedSDKReferencesOutputType;
    PackagingOutputsUnexpanded?: PackagingOutputsUnexpandedType;
    ProjectArchitectureFromPayload?: ProjectArchitectureFromPayloadType;
    ProjectArchitectureItem?: ProjectArchitectureItemType;
    /** An assembly containing diagnostic analyzers */
    Analyzer?: AnalyzerType;
    /** XAML file that contains the application definition, only one can be defined */
    ApplicationDefinition?: ApplicationDefinitionType;
    /** Hash algorithm URI. */
    AppxHashUri?: AppxHashUriType;
    /** app manifest template */
    AppxManifest?: AppxManifestType;
    /** XPath queries used to extract file names from the app manifest. */
    AppxManifestFileNameQuery?: SimpleItemType;
    /** XPath queries used to define image files in the app manifest and restrictions on them. */
    AppxManifestImageFileNameQuery?: AppxManifestImageFileNameQueryType;
    /** App manifest metadata item. Can be a literal, or it can be a path to a binary to extract version from. */
    AppxManifestMetadata?: AppxManifestMetadataType;
    /** App manifest schema file. */
    AppxManifestSchema?: SchemaItemType;
    AppxPackagePayload?: AppxPackagePayloadType;
    /** Reserved file name which cannot appear in the app package. */
    AppxReservedFileName?: SimpleItemType;
    /** Name of any file which is present on the machine and should not be part of the app payload. */
    AppxSystemBinary?: SimpleItemType;
    /** The base application manifest for the build. Contains ClickOnce security information. */
    BaseApplicationManifest?: SimpleItemType;
    BootstrapperFile?: BootstrapperFileType;
    Bscmake?: BscmakeType;
    ClCompile?: ClCompileType;
    ClInclude?: ClIncludeType;
    /** Additional reference assembly paths to pass to the Code Analysis command line tool. */
    CodeAnalysisDependentAssemblyPaths?: CodeAnalysisDependentAssemblyPathsType;
    /** Code Analysis custom dictionaries. */
    CodeAnalysisDictionary?: CodeAnalysisDictionaryType;
    /** Code Analysis projects (*.fxcop) or reports to import. */
    CodeAnalysisImport?: CodeAnalysisImportType;
    COMFileReference?: COMFileReferenceType;
    ComFilesOutputGroupOutputs?: ComFilesOutputGroupOutputsType;
    /** Source files for compiler */
    Compile?: CompileType;
    /** Reference to a COM component */
    COMReference?: COMReferenceType;
    /** Files that are not compiled, but may be embedded or published */
    Content?: ContentType;
    CopyLocalFilesOutputGroupOutput?: CopyLocalFilesOutputGroupOutputType;
    CopyWinmdArtifactsOutputGroupOutputs?: CopyWinmdArtifactsOutputGroupOutputsType;
    CustomBuildStep?: CustomBuildStepType;
    /** The CLI tool that the user wants restored in the context of the project */
    DotNetCliToolReference?: DotNetCliToolReferenceType;
    /** Resources to be embedded in the generated assembly */
    EmbeddedResource?: EmbeddedResourceType;
    FileAssociation?: FileAssociationType;
    /** Folder on disk */
    Folder?: SimpleItemType;
    /** Reference to a shared framework. */
    FrameworkReference?: FrameworkReferenceType;
    /** Assemblies whose namespaces should be imported by the Visual Basic compiler */
    Import?: SimpleItemType;
    /** Specifies that internal types and members are visible to the specified friend assemblies. */
    InternalsVisibleTo?: InternalsVisibleToType;
    Manifest?: ManifestType;
    Midl?: MidlType;
    /** Reference to a native manifest file, or to a file that contains a native manifest */
    NativeReference?: NativeReferenceType;
    /** Files that should have no role in the build process */
    None?: NoneType;
    /** Reference to a package */
    PackageReference?: PackageReferenceType;
    /** XAML files that are converted to binary and compiled into the assembly */
    Page?: PageType;
    /** Platform version description. Used to map between internal OS version and marketing OS version. */
    PlatformVersionDescription?: PlatformVersionDescriptionType;
    PreLinkEvent?: PreLinkEventType;
    /** String resources to be indexed in app package's resource index. */
    PRIResource?: PRIResourceType;
    ProjectConfiguration?: ProjectConfigurationType;
    ProjectPriFile?: ProjectPriFileType;
    /** Reference to another project */
    ProjectReference?: ProjectReferenceType;
    PublishFile?: PublishFileType;
    /** Reference to an assembly */
    Reference?: ReferenceType;
    /** File that is compiled into the assembly */
    Resource?: ResourceType;
    ResourceCompile?: ResourceCompileType;
    /** Reference to an extension SDK */
    SDKReference?: SDKReferenceType;
    Service?: SimpleItemType;
    /** A file containing app store association data. */
    StoreAssociationFile?: StoreAssociationFileType;
    /** Store manifest schema file. */
    StoreManifestSchema?: SchemaItemType;
    /** Defines an item to be considered an output of the project for the fast up-to-date check, with optional corresponding input via 'Original' metadata. When 'Original' metadata is specified, the input and output are considered in isolation. Useful when a single file will be copied (and potentially transformed in doing so) during build. */
    UpToDateCheckBuilt?: UpToDateCheckBuiltType;
    /** Defines an item to be considered an input to the project for the fast up-to-date check. */
    UpToDateCheckInput?: UpToDateCheckInputType;
    /** Defines an item to be considered an output of the project for the fast up-to-date check. */
    UpToDateCheckOutput?: UpToDateCheckOutputType;
    /** A C# global using to add to the project. */
    Using?: UsingType;
    /** Name of Web References folder to display in user interface */
    WebReferences?: SimpleItemType;
    /** Represents a reference to a web service */
    WebReferenceUrl?: WebReferenceUrlType;
    Xdcmake?: XdcmakeType;
}
interface ItemProxyType extends _ItemProxyType { constructor: { new(): ItemProxyType }; }

interface _LCType extends _TaskType {
    LogStandardErrorAsError: string;
    NoLogo: string;
}
interface LCType extends _LCType { constructor: { new(): LCType }; }

interface _LIBType extends _TaskType {
    IgnoreAllDefaultLibraries: string;
    LinkLibraryDependencies: string;
    LinkTimeCodeGeneration: string;
    LogStandardErrorAsError: string;
    MinimalRebuildFromTracking: string;
    SkippedExecution: string;
    SuppressStartupBanner: string;
    TrackFileAccess: string;
    TreatLibWarningAsErrors: string;
    UseUnicodeResponseFiles: string;
    Verbose: string;
}
interface LIBType extends _LIBType { constructor: { new(): LIBType }; }

interface _LinkItem extends _SimpleItemType { }
export interface LinkItem extends _LinkItem { constructor: { new(): LinkItem }; }
export var LinkItem: { new(): LinkItem };

interface _LinkType extends _TaskType {
    AllowIsolation: string;
    AssemblyDebug: string;
    CLRUnmanagedCodeCheck: string;
    DataExecutionPrevention: string;
    DelaySign: string;
    EnableCOMDATFolding: string;
    EnableUAC: string;
    FixedBaseAddress: string;
    GenerateDebugInformation: string;
    GenerateManifest: string;
    GenerateMapFile: string;
    IgnoreAllDefaultLibraries: string;
    IgnoreEmbeddedIDL: string;
    IgnoreImportLibrary: string;
    ImageHasSafeExceptionHandlers: string;
    LargeAddressAware: string;
    LinkDLL: string;
    LinkIncremental: string;
    LinkLibraryDependencies: string;
    LinkStatus: string;
    LogStandardErrorAsError: string;
    MapExports: string;
    MinimalRebuildFromTracking: string;
    NoEntryPoint: string;
    OptimizeReferences: string;
    PerUserRedirection: string;
    PreventDllBinding: string;
    Profile: string;
    RandomizedBaseAddress: string;
    RegisterOutput: string;
    SetChecksum: string;
    SkippedExecution: string;
    SupportNobindOfDelayLoadedDLL: string;
    SupportUnloadOfDelayLoadedDLL: string;
    SuppressStartupBanner: string;
    SwapRunFromCD: string;
    SwapRunFromNET: string;
    TerminalServerAware: string;
    TrackFileAccess: string;
    TreatLinkerWarningAsErrors: string;
    TurnOffAssemblyGeneration: string;
    UACUIAccess: string;
    UseLibraryDependencyInputs: string;
}
interface LinkType extends _LinkType { constructor: { new(): LinkType }; }

interface _MakeAppxBundleType extends _MakeAppxWithOutputType { }
interface MakeAppxBundleType extends _MakeAppxBundleType { constructor: { new(): MakeAppxBundleType }; }

interface _MakeAppxPackType extends _MakeAppxWithOutputType {
    ResourcePack: string;
    ValidateResourcesReferencedByManifest: string;
}
interface MakeAppxPackType extends _MakeAppxPackType { constructor: { new(): MakeAppxPackType }; }

interface _MakeAppxType extends _ToolTaskType { }
export interface MakeAppxType extends _MakeAppxType { constructor: { new(): MakeAppxType }; }
export var MakeAppxType: { new(): MakeAppxType };

interface _MakeAppxWithOutputType extends _MakeAppxType { }
export interface MakeAppxWithOutputType extends _MakeAppxWithOutputType { constructor: { new(): MakeAppxWithOutputType }; }
export var MakeAppxWithOutputType: { new(): MakeAppxWithOutputType };

interface _MakeDirType extends _TaskType { }
interface MakeDirType extends _MakeDirType { constructor: { new(): MakeDirType }; }

interface _ManifestType extends _SimpleItemType {
    OutputResourceManifests?: ManifestTypeOutputResourceManifestsType[];
}
interface ManifestType extends _ManifestType { constructor: { new(): ManifestType }; }

interface _ManifestTypeOutputResourceManifestsType extends Primitive._string { }
interface ManifestTypeOutputResourceManifestsType extends _ManifestTypeOutputResourceManifestsType { constructor: { new(): ManifestTypeOutputResourceManifestsType }; }

interface _MessageType extends _TaskType {
    Importance: string;
}
interface MessageType extends _MessageType { constructor: { new(): MessageType }; }

interface _MidlType extends _SimpleItemType {
    ValidateAllParameters?: string[];
}
interface MidlType extends _MidlType { constructor: { new(): MidlType }; }

interface _MoveType extends _TaskType {
    OverwriteReadOnlyFiles: string;
}
interface MoveType extends _MoveType { constructor: { new(): MoveType }; }

interface _MSBuildType extends _TaskType {
    BuildInParallel: string;
    RebaseOutputs: string;
    RunEachTargetSeparately: string;
    SkipNonexistentProjects: string;
    SkipNonexistentTargets: string;
    StopOnFirstFailure: string;
    UnloadProjectsOnCompletion: string;
    UseResultsCache: string;
}
interface MSBuildType extends _MSBuildType { constructor: { new(): MSBuildType }; }

interface _MtType extends _TaskType {
    EmbedManifest: string;
    GenerateCatalogFiles: string;
    GenerateCategoryTags: string;
    LogStandardErrorAsError: string;
    MinimalRebuildFromTracking: string;
    SkippedExecution: string;
    SuppressDependencyElement: string;
    SuppressStartupBanner: string;
    TrackFileAccess: string;
    UpdateFileHashes: string;
    VerboseOutput: string;
}
interface MtType extends _MtType { constructor: { new(): MtType }; }

interface _NativeReferenceType extends _SimpleItemType {
    /** Reference full name */
    Include?: string;
}
interface NativeReferenceType extends _NativeReferenceType { constructor: { new(): NativeReferenceType }; }

export type non_empty_string = string;
type _non_empty_string = Primitive._string;

interface _NoneType extends _SimpleItemType {
    CopyToOutputDirectory?: NoneTypeCopyToOutputDirectoryType[];
    /** Display in user interface (optional, boolean) */
    Visible?: string[];
}
interface NoneType extends _NoneType { constructor: { new(): NoneType }; }

type NoneTypeCopyToOutputDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _NoneTypeCopyToOutputDirectoryType extends Primitive._string { content: NoneTypeCopyToOutputDirectoryType; }

type NullableType = ("enable" | "disable" | "warnings" | "annotations");
interface _NullableType extends Primitive._string { content: NullableType; }

/** Specifies targets to execute in the event of a recoverable error */
interface _OnErrorType extends BaseType {
    /** Optional expression evaluated to determine whether the targets should be executed */
    Condition?: string;
    /** Semi-colon separated list of targets to execute */
    ExecuteTargets: string;
    /** Optional expression. Used to identify or order system and user elements */
    Label?: string;
}
export interface OnErrorType extends _OnErrorType { constructor: { new(): OnErrorType }; }
export var OnErrorType: { new(): OnErrorType };

/** Groups PropertyGroup and/or ItemGroup elements that are used if no Conditions on sibling When elements evaluate to true */
interface _OtherwiseType extends BaseType {
    Choose?: ChooseType[];
    ItemGroup?: ItemGroupType[];
    PropertyGroup?: PropertyGroupType[];
}
export interface OtherwiseType extends _OtherwiseType { constructor: { new(): OtherwiseType }; }
export var OtherwiseType: { new(): OtherwiseType };

interface _PackageReferenceType extends _SimpleItemType {
    /** Assets to exclude from this reference */
    $ExcludeAssets?: string;
    /** Set to true to generate a Pkg* property that points to the restored location of the NuGet package contents */
    $GeneratePathProperty?: string;
    /** Name of the package */
    Include: string;
    /** Assets to include from this reference */
    $IncludeAssets?: string;
    /** Semicolon-separated list of warning codes to ignore (such as NU1605) */
    $NoWarn?: string;
    /** Assets that are private in this reference */
    $PrivateAssets?: string;
    /** Version of dependency */
    Version?: string;
}
interface PackageReferenceType extends _PackageReferenceType { constructor: { new(): PackageReferenceType }; }

interface _PackagingOutputsUnexpandedType extends _SimpleItemType {
    TargetPath?: StringPropertyType;
}
interface PackagingOutputsUnexpandedType extends _PackagingOutputsUnexpandedType { constructor: { new(): PackagingOutputsUnexpandedType }; }

interface _PageType extends _SimpleItemType {
    $CopyToOutputDirectory: PageType$CopyToOutputDirectoryType;
    /** Semi-colon separated list of XAML files (wildcards are allowed) */
    Include?: string;
    /** Copy file to output directory (optional, Never, PreserveNewest or Always, default Never) */
    CopyToOutputDirectory?: PageTypeCopyToOutputDirectoryType[];
}
interface PageType extends _PageType { constructor: { new(): PageType }; }

type PageType$CopyToOutputDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _PageType$CopyToOutputDirectoryType extends Primitive._string { content: PageType$CopyToOutputDirectoryType; }

type PageTypeCopyToOutputDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _PageTypeCopyToOutputDirectoryType extends Primitive._string { content: PageTypeCopyToOutputDirectoryType; }

/** Groups parameters that are part of an inline task definition. */
interface _ParameterGroupType extends BaseType { }
export interface ParameterGroupType extends _ParameterGroupType { constructor: { new(): ParameterGroupType }; }
export var ParameterGroupType: { new(): ParameterGroupType };

interface _ParsePlatformSpecificBundleArtifactsListsType extends _TaskType { }
interface ParsePlatformSpecificBundleArtifactsListsType extends _ParsePlatformSpecificBundleArtifactsListsType { constructor: { new(): ParsePlatformSpecificBundleArtifactsListsType }; }

interface _PlatformVersionDescriptionType extends _SimpleItemType { }
interface PlatformVersionDescriptionType extends _PlatformVersionDescriptionType { constructor: { new(): PlatformVersionDescriptionType }; }

interface _PostBuildEventItem extends _SimpleItemType { }
export interface PostBuildEventItem extends _PostBuildEventItem { constructor: { new(): PostBuildEventItem }; }
export var PostBuildEventItem: { new(): PostBuildEventItem };

interface _PreBuildEventItem extends _SimpleItemType { }
export interface PreBuildEventItem extends _PreBuildEventItem { constructor: { new(): PreBuildEventItem }; }
export var PreBuildEventItem: { new(): PreBuildEventItem };

interface _PreLinkEventType extends _SimpleItemType { }
interface PreLinkEventType extends _PreLinkEventType { constructor: { new(): PreLinkEventType }; }

interface _PRIResourceType extends _SimpleItemType {
    /** Display in user interface (optional, boolean). */
    Visible?: string;
}
interface PRIResourceType extends _PRIResourceType { constructor: { new(): PRIResourceType }; }

interface _ProjectArchitectureFromPayloadType extends _SimpleItemType { }
interface ProjectArchitectureFromPayloadType extends _ProjectArchitectureFromPayloadType { constructor: { new(): ProjectArchitectureFromPayloadType }; }

interface _ProjectArchitectureItemType extends _SimpleItemType { }
interface ProjectArchitectureItemType extends _ProjectArchitectureItemType { constructor: { new(): ProjectArchitectureItemType }; }

interface _ProjectConfigurationType extends _SimpleItemType { }
interface ProjectConfigurationType extends _ProjectConfigurationType { constructor: { new(): ProjectConfigurationType }; }

/** Optional section used by MSBuild hosts, that may contain arbitrary XML content that is ignored by MSBuild itself */
interface _ProjectExtensionsType extends BaseType { }
export interface ProjectExtensionsType extends _ProjectExtensionsType { constructor: { new(): ProjectExtensionsType }; }
export var ProjectExtensionsType: { new(): ProjectExtensionsType };

interface _ProjectPriFileType extends _SimpleItemType { }
interface ProjectPriFileType extends _ProjectPriFileType { constructor: { new(): ProjectPriFileType }; }

interface _ProjectReferenceType extends _SimpleItemType {
    /** Path to project file */
    Include?: string;
    /** Whether the types in this reference need to embedded into the target assembly - interop assemblies only (optional, boolean) */
    EmbedInteropTypes?: string[];
    /** Boolean specifying whether the outputs of the project referenced should be passed to the compiler. Default is true. */
    ReferenceOutputAssembly?: string[];
}
interface ProjectReferenceType extends _ProjectReferenceType { constructor: { new(): ProjectReferenceType }; }

interface _ProjectType extends BaseType {
    /** Optional semi-colon separated list of one or more targets that will be built if no targets are otherwise specified */
    DefaultTargets?: string;
    /** Optional semi-colon separated list of targets that should always be built before any other targets */
    InitialTargets?: string;
    /** Optional string describing the MSBuild SDK(s) this project should be built with */
    Sdk?: string;
    /** Optional string describing the toolset version this project should normally be built with */
    ToolsVersion?: string;
    Choose?: ChooseType[];
    Import: ImportType[];
    ImportGroup: ImportGroupType[];
    ItemDefinitionGroup?: ItemDefinitionGroupType[];
    ItemGroup?: ItemGroupType[];
    ProjectExtensions?: ProjectExtensionsType[];
    PropertyGroup?: PropertyGroupType[];
    Target: TargetType[];
    UsingTask?: UsingTaskType[];
}
interface ProjectType extends _ProjectType { constructor: { new(): ProjectType }; }

/** Groups property definitions */
interface _PropertyGroupType extends BaseType {
    /** Optional expression evaluated to determine whether the PropertyGroup should be used */
    Condition?: string;
    /** Optional expression. Used to identify or order system and user elements */
    Label?: string;
    Property?: PropertyProxyType[];
}
export interface PropertyGroupType extends _PropertyGroupType { constructor: { new(): PropertyGroupType }; }
export var PropertyGroupType: { new(): PropertyGroupType };

interface _PropertyProxyType extends BaseType {
    StoreManifestSchemaDir?: StringPropertyType;
    /** Indicates whether to enable acceleration when building in Visual Studio (boolean). */
    AccelerateBuildsInVisualStudio?: string;
    AdditionalFileItemNames?: StringPropertyType;
    /** Flag indicating whether to allow local network loopback. */
    AllowLocalNetworkLoopback?: StringPropertyType;
    AllowUnsafeBlocks?: StringPropertyType;
    /** Customizes the set of rules that are enabled by default. */
    AnalysisLevel?: AnalysisLevelType;
    /** Customizes the set of rules that are enabled by default. */
    AnalysisMode?: AnalysisModeType;
    /** Used by Xamarin.Android projects. A boolean value that indicates whether the project is for an Android Application (True) or for an Android Library Project (False or not present). */
    AndroidApplication?: string;
    /** Used by Xamarin.Android projects. A string property that indicates which Android dex compiler is used during the Xamarin.Android build process. */
    AndroidDexTool?: AndroidDexToolType;
    /** Used by Xamarin.Android projects. A boolean property that determines whether or not AOT profiles are used during Ahead-of-Time compilation. */
    AndroidEnableProfiledAot?: string;
    /** Used by Xamarin.Android projects. A string property that specifies which type of linking should be performed on assemblies contained within the Android package. Only used in Android Application projects. */
    AndroidLinkMode?: AndroidLinkModeType;
    /** Used by Xamarin.Android projects. Specifies a semicolon-delimited (;) list of assembly names, without file extensions, of assemblies that should not be linked. */
    AndroidLinkSkip?: StringPropertyType;
    /** Used by Xamarin.Android projects. A string property that indicates which code shrinker is used for Java code. */
    AndroidLinkTool?: AndroidLinkToolType;
    /** Used by Xamarin.Android projects. A string property that indicates if you want to package the Android application as an APK file or Android App Bundle. */
    AndroidPackageFormat?: AndroidPackageFormatType;
    /** Used by Xamarin.Android projects. A string property that contains a semicolon (;)-delimited list of ABIs which should be included into the application. */
    AndroidSupportedAbis?: StringPropertyType;
    /** Used by Xamarin.Android projects. A boolean property that determines whether or not assemblies will be Ahead-of-Time compiled into native code. */
    AotAssemblies?: string;
    AppConfigForCompiler?: StringPropertyType;
    /** Name of folder for Application Designer */
    AppDesignerFolder?: StringPropertyType;
    /** Customizes the application default font. The format equivalent to the output of FontConverter.ConvertToInvariantString(). Applies only to Windows Forms projects. */
    ApplicationDefaultFont?: StringPropertyType;
    /** Customizes the application DPI awareness mode. Applies only to Windows Forms projects. */
    ApplicationHighDpiMode?: ApplicationHighDpiModeType;
    ApplicationIcon?: StringPropertyType;
    /** integer */
    ApplicationRevision?: StringPropertyType;
    /** Indicates whether to set UseCompatibleTextRendering property defined on certain controls (boolean). Applies only to Windows Forms projects. */
    ApplicationUseCompatibleTextRendering?: string;
    /** Matches the expression "\d\.\d\.\d\.(\d|\*)" */
    ApplicationVersion?: StringPropertyType;
    /** Indicates whether to enable or disable visual styles (boolean). Applies only to Windows Forms projects. */
    ApplicationVisualStyles?: string;
    /** Flag indicating whether to auto-increment package revision. */
    AppxAutoIncrementPackageRevision?: StringPropertyType;
    /** Flag indicating whether packaging targets will produce an app bundle. */
    AppxBundle?: StringPropertyType;
    /** '|'-delimited list of resource qualifiers which will be used for automatic resource pack splitting. */
    AppxBundleAutoResourcePackageQualifiers?: StringPropertyType;
    /** Full path to a folder where app bundle will be produced. */
    AppxBundleDir?: StringPropertyType;
    /** Suffix to append to app bundle folder. */
    AppxBundleFolderSuffix?: StringPropertyType;
    /** Full path to a log file containing a list of generated files during generation of main package file map. */
    AppxBundleMainPackageFileMapGeneratedFilesListPath?: StringPropertyType;
    /** Full path to an intermediate main package file map. */
    AppxBundleMainPackageFileMapIntermediatePath?: StringPropertyType;
    /** Prefix used for intermediate main package resources .pri and .map.txt files. */
    AppxBundleMainPackageFileMapIntermediatePrefix?: StringPropertyType;
    /** Full path to an intermediate main package .pri file. */
    AppxBundleMainPackageFileMapIntermediatePriPath?: StringPropertyType;
    /** Full path to a main package file map. */
    AppxBundleMainPackageFileMapPath?: StringPropertyType;
    /** Prefix used for main package resources .pri and .map.txt files. */
    AppxBundleMainPackageFileMapPrefix?: StringPropertyType;
    /** Suffix used before extension of resource map files. */
    AppxBundleMainPackageFileMapSuffix?: StringPropertyType;
    /** '|'-delimited list of platforms which will be included in an app bundle. */
    AppxBundlePlatforms?: StringPropertyType;
    /** Full path to the priconfig.xml file used for generating main package file map. */
    AppxBundlePriConfigXmlForMainPackageFileMapFileName?: StringPropertyType;
    /** Full path to the priconfig.xml file used for splitting resource packs. */
    AppxBundlePriConfigXmlForSplittingFileName?: StringPropertyType;
    /** A platform which will be used to produce an app bundle. */
    AppxBundleProducingPlatform?: StringPropertyType;
    /** A platform which will be used to produce resource packs for an app bundle. */
    AppxBundleResourcePacksProducingPlatform?: StringPropertyType;
    /** Full path to a log file containing a list of generated files during resource splitting. */
    AppxBundleSplitResourcesGeneratedFilesListPath?: StringPropertyType;
    /** Full path to split resources .pri file. */
    AppxBundleSplitResourcesPriPath?: StringPropertyType;
    /** Prefix used for split resources .pri and .map.txt files. */
    AppxBundleSplitResourcesPriPrefix?: StringPropertyType;
    /** Full path to a log file containing a detected qualifiers during resource splitting. */
    AppxBundleSplitResourcesQualifiersPath?: StringPropertyType;
    /** Flag indicating whether CopyLocal files group should include XML files. */
    AppxCopyLocalFilesOutputGroupIncludeXmlFiles?: StringPropertyType;
    /** Additional parameters to pass to makepri.exe when generating PRI file for a portable library. */
    AppxCreatePriFilesForPortableLibrariesAdditionalMakepriExeParameters?: StringPropertyType;
    /** Default hash algorithm ID, used for signing an app package. */
    AppxDefaultHashAlgorithmId?: StringPropertyType;
    /** '|'-delimited list of key=value pairs representing default resource qualifiers. */
    AppxDefaultResourceQualifiers?: StringPropertyType;
    /** Flag to exclude XAML files when XBF is present. */
    AppxExcludeXamlFromLibraryLayoutsWhenXbfIsPresent?: StringPropertyType;
    /** Flag to exclude XBF files when XAML is present. */
    AppxExcludeXbfFromSdkPayloadWhenXamlIsPresent?: StringPropertyType;
    /** Additional parameters to pass to makepri.exe when extracting payload file names. */
    AppxExpandPriContentAdditionalMakepriExeParameters?: StringPropertyType;
    /** Flag indicating whether to filter out unused language resource file maps. */
    AppxFilterOutUnusedLanguagesResourceFileMaps?: StringPropertyType;
    /** Flag indicating whether to generate resource index files (PRI files) during packaging. */
    AppxGeneratePriEnabled?: StringPropertyType;
    /** Additional parameters to pass to makepri.exe when generating project PRI file. */
    AppxGenerateProjectPriFileAdditionalMakepriExeParameters?: StringPropertyType;
    /** Flag indicating whether to enable harvesting of WinMD registration information. */
    AppxHarvestWinmdRegistration?: StringPropertyType;
    /** Full path to the folder where package layout will be prepared when producing an app bundle. */
    AppxLayoutDir?: StringPropertyType;
    /** Name of the folder where package layout will be prepared when producing an app bundle. */
    AppxLayoutFolderName?: StringPropertyType;
    /** Full path to packaging build tasks assembly. */
    AppxMSBuildTaskAssembly?: StringPropertyType;
    /** Full path to a folder containing packaging build targets and tasks assembly. */
    AppxMSBuildToolsPath?: StringPropertyType;
    /** Targeted maximum OS version tested. */
    AppxOSMaxVersionTested?: StringPropertyType;
    /** Flag indicating whether maximum OS version tested in app manifest should be replaced. */
    AppxOSMaxVersionTestedReplaceManifestVersion?: StringPropertyType;
    /** Targeted minimum OS version. */
    AppxOSMinVersion?: StringPropertyType;
    /** Flag indicating whether minimum OS version in app manifest should be replaced. */
    AppxOSMinVersionReplaceManifestVersion?: StringPropertyType;
    /** Flag marking current project as capable of being packaged as an app package. */
    AppxPackage?: StringPropertyType;
    /** Flag indicating whether to allow inclusion of debug framework references in an app manifest. */
    AppxPackageAllowDebugFrameworkReferencesInManifest?: StringPropertyType;
    /** Additional qualifier to append to AppxPackageDir. */
    AppxPackageArtifactsDir?: StringPropertyType;
    /** Full path to a folder where app packages will be saved. */
    AppxPackageDir?: StringPropertyType;
    /** Name of the folder where app packages are produced. */
    AppxPackageDirName?: StringPropertyType;
    /** Full path to app package file map. */
    AppxPackageFileMap?: StringPropertyType;
    /** Flag indicating whether to include private symbols in symbol packages. */
    AppxPackageIncludePrivateSymbols?: StringPropertyType;
    /** Name of the app package to generate. */
    AppxPackageName?: StringPropertyType;
    /** Full path to the app package file. */
    AppxPackageOutput?: StringPropertyType;
    /** Full path to the app package recipe. */
    AppxPackageRecipe?: StringPropertyType;
    /** Flag indicating whether to enable signing of app packages. */
    AppxPackageSigningEnabled?: StringPropertyType;
    /** Digest algorithm used by the RFC 3161 timestamp server. */
    AppxPackageSigningTimestampDigestAlgorithm?: StringPropertyType;
    /** RFC 3161 timestamp server's URL. */
    AppxPackageSigningTimestampServerUrl?: StringPropertyType;
    /** Name of the folder where test app packages will be copied */
    AppxPackageTestDir?: StringPropertyType;
    /** Flag indicating whether to enable validation of app packages. */
    AppxPackageValidationEnabled?: StringPropertyType;
    /** Full path to the packaging info file which will contain paths to produced packages. */
    AppxPackagingInfoFile?: StringPropertyType;
    /** Flag indicating whether to enable prepending initial path when indexing RESW and RESJSON files in class libraries. */
    AppxPrependPriInitialPath?: StringPropertyType;
    /** Path to an XML file containing default element for priconfi.xml file. */
    AppxPriConfigXmlDefaultSnippetPath?: StringPropertyType;
    /** Path to an XML file containing packaging element for priconfi.xml file. */
    AppxPriConfigXmlPackagingSnippetPath?: StringPropertyType;
    /** Initial path when indexing RESW and RESJSON files in class libraries. */
    AppxPriInitialPath?: StringPropertyType;
    /** Flag indicating whether to skip unchanged files when copying files during creation of app packages. */
    AppxSkipUnchangedFiles?: StringPropertyType;
    /** Name of the app store container to generate. */
    AppxStoreContainer?: StringPropertyType;
    /** Flag indicating whether to enable strict manifest validation. */
    AppxStrictManifestValidationEnabled?: StringPropertyType;
    /** Flag indicating whether to generate a symbol package when an app package is created. */
    AppxSymbolPackageEnabled?: StringPropertyType;
    /** Full path to the app symbol package file. */
    AppxSymbolPackageOutput?: StringPropertyType;
    /** Full path to a directory where stripped PDBs will be stored. */
    AppxSymbolStrippedDir?: StringPropertyType;
    /** Flag indicating whether to create test layout when an app package is created. */
    AppxTestLayoutEnabled?: StringPropertyType;
    /** Flag indicating whether to use hard links if possible when copying files during creation of app packages. */
    AppxUseHardlinksIfPossible?: StringPropertyType;
    /** Flag indicating whether to validate app manifest. */
    AppxValidateAppxManifest?: StringPropertyType;
    /** Flag indicating whether to validate store manifest. */
    AppxValidateStoreManifest?: StringPropertyType;
    /** Path to the folder where harvested WinMD registration information will be cached. */
    AppxWinMdCacheDir?: StringPropertyType;
    /** Flag indicating whether to cache the harvested WinMD registration information. */
    AppxWinMdCacheEnabled?: StringPropertyType;
    AspNetConfiguration?: StringPropertyType;
    /** Indicates whether to run an ASP.NET Core application using IIS in-process or out-of-process. */
    AspNetCoreHostingModel?: StringPropertyType;
    /** Indicates which AspNetCoreModule version to use. Versions include V1 and V2. */
    AspNetCoreModuleName?: StringPropertyType;
    AssemblyKeyContainerName?: StringPropertyType;
    AssemblyKeyProviderName?: StringPropertyType;
    /** Name of output assembly */
    AssemblyName?: StringPropertyType;
    AssemblyOriginatorKeyFile?: StringPropertyType;
    AssemblyOriginatorKeyFileType?: StringPropertyType;
    AssemblyOriginatorKeyMode?: StringPropertyType;
    AssemblySearchPath_UseAssemblyFolders?: string;
    AssemblySearchPath_UseAssemblyFoldersConfigFileSearchPath?: string;
    AssemblySearchPath_UseCandidateAssemblyFiles?: string;
    AssemblySearchPath_UseGAC?: string;
    AssemblySearchPath_UseHintPathFromItem?: string;
    AssemblySearchPath_UseOutDir?: string;
    AssemblySearchPath_UseRawFileName?: string;
    AssemblySearchPath_UseReferencePath?: string;
    AssemblySearchPath_UseRegistry?: string;
    AssemblySearchPath_UseTargetFrameworkDirectory?: string;
    /** Semicolon-delimited ordered list of paths to search when the ResolveAssemblyReference task looks for an assembly. Some non-path locations like the Global Assembly Cache can also be searched using curly braces: {GAC}. */
    AssemblySearchPaths?: StringPropertyType;
    /** Description for the assembly manifest */
    AssemblyTitle?: StringPropertyType;
    AssemblyType?: StringPropertyType;
    /** Numeric value of the version for the assembly manifest in the format major.minor.patch (e.g. 2.4.0) */
    AssemblyVersion?: StringPropertyType;
    /** Can be set to one or more target framework monikers. When determining package compatibility, if the package does not have compatible assets for the project's real target framework, compatibility will be rechecked using each target framework from the AssetTargetFramework project of the referencing project. */
    AssetTargetFallback?: StringPropertyType;
    /** A comma-separated list of NuGet packages authors */
    Authors?: StringPropertyType;
    /** Indicates whether BindingRedirect elements should be automatically generated for referenced assemblies. */
    AutoGenerateBindingRedirects?: StringPropertyType;
    /** Flag indicating whether to enable auto increment of an app package revision. */
    AutoIncrementPackageRevision?: StringPropertyType;
    /** boolean */
    AutorunEnabled?: string;
    BaseAddress?: StringPropertyType;
    /** Base path of output folder, where all configuration-specific output folders will be created. Default value is bin\. */
    BaseOutputPath?: StringPropertyType;
    /** HomeSite, Relative, or Absolute */
    BootstrapperComponentsLocation?: StringPropertyType;
    BootstrapperComponentsUrl?: StringPropertyType;
    /** boolean */
    BootstrapperEnabled?: string;
    CharacterSet?: StringPropertyType;
    CheckForOverflowUnderflow?: StringPropertyType;
    CLRSupport?: StringPropertyType;
    /** Additional options to pass to the Code Analysis command line tool. */
    CodeAnalysisAdditionalOptions?: StringPropertyType;
    /** Indicates whether to apply the XSL style sheet specified in $(CodeAnalysisLogFileXsl) to the Code Analysis report. This report is specified in $(CodeAnalysisLogFile). The default is false. */
    CodeAnalysisApplyLogFileXsl?: string;
    /** Path to the XSL style sheet that will be applied to the Code Analysis console output. The default is an empty string (''), which causes Code Analysis to use its default console output. */
    CodeAnalysisConsoleXsl?: StringPropertyType;
    /** Culture to use for Code Analysis spelling rules, for example, 'en-US' or 'en-AU'. The default is the current user interface language for Windows. */
    CodeAnalysisCulture?: StringPropertyType;
    /** Indicates whether Code Analysis should fail if a rule or rule set is missing. The default is false. */
    CodeAnalysisFailOnMissingRules?: string;
    /** Indicates whether Code Analysis generates a report file, even when there are no active warnings or errors. The default is true. */
    CodeAnalysisForceOutput?: string;
    /** Indicates whether Code Analysis generates a '$(CodeAnalysisInputAssembly).lastcodeanalysissucceeded' file in the output folder when no build-breaking errors occur. The default is true. */
    CodeAnalysisGenerateSuccessFile?: string;
    /** Indicates whether Code Analysis will ignore the default rule directories when searching for rules. The default is false. */
    CodeAnalysisIgnoreBuiltInRules?: string;
    /** Indicates whether Code Analysis will ignore the default rule set directories when searching for rule sets. The default is false. */
    CodeAnalysisIgnoreBuiltInRuleSets?: string;
    /** Indicates whether Code Analysis should fail silently when it analyzes invalid assemblies, such as those without managed code. The default is true. */
    CodeAnalysisIgnoreGeneratedCode?: string;
    /** Indicates whether Code Analysis should silently fail when analyzing invalid assemblies, such as those without managed code. The default is true. */
    CodeAnalysisIgnoreInvalidTargets?: string;
    /** Path to the assembly to be analyzed by Code Analysis. The default is '$(OutDir)$(TargetName)$(TargetExt)'. */
    CodeAnalysisInputAssembly?: StringPropertyType;
    /** Path to the output file for the Code Analysis report. The default is '$(CodeAnalysisInputAssembly).CodeAnalysisLog.xml'. */
    CodeAnalysisLogFile?: StringPropertyType;
    /** Path to the XSL style sheet to reference in the Code Analysis output report. This report is specified in $(CodeAnalysisLogFile). The default is an empty string (''). */
    CodeAnalysisLogFileXsl?: StringPropertyType;
    /** Name of the file, without the path, where Code Analysis project-level suppressions are stored. The default is 'GlobalSuppressions$(DefaultLanguageSourceExtension)'. */
    CodeAnalysisModuleSuppressionsFile?: StringPropertyType;
    /** Indicates whether to output Code Analysis warnings and errors to the console. The default is false. */
    CodeAnalysisOutputToConsole?: string;
    /** Indicates whether to run all overridable Code Analysis rules against all targets. This will cause specific rules, such as those within the Design and Naming categories, to run against both public and internal APIs, instead of only public APIs. The default is false. */
    CodeAnalysisOverrideRuleVisibilities?: string;
    /** Path to the Code Analysis installation folder. The default is '$(VSINSTALLDIR)\Team Tools\Static Analysis Tools\FxCop'. */
    CodeAnalysisPath?: StringPropertyType;
    /** Path to the .NET Framework folder that contains platform assemblies, such as mscorlib.dll and System.dll. The default is an empty string (''). */
    CodeAnalysisPlatformPath?: StringPropertyType;
    /** Path to the Code Analysis project (*.fxcop) to load. The default is an empty string (''). */
    CodeAnalysisProject?: StringPropertyType;
    /** Indicates whether to suppress all Code Analysis console output other than errors and warnings. This applies when $(CodeAnalysisOutputToConsole) is true. The default is false. */
    CodeAnalysisQuiet?: string;
    /** Semicolon-separated list of paths either to Code Analysis rule assemblies or to folders that contain Code Analysis rule assemblies. The paths are in the form '[+|-][!][file|folder]', where '+' enables all rules in rule assembly, '-' disables all rules in rule assembly, and '!' causes all rules in rule assembly to be treated as errors. For example '+D:\Projects\Rules\NamingRules.dll;+!D:\Projects\Rules\SecurityRules.dll'. The default is '$(CodeAnalysisPath)\Rules'. */
    CodeAnalysisRuleAssemblies?: StringPropertyType;
    /** Semicolon-separated list of directories in which to search for rules when resolving a rule set. The default is '$(CodeAnalysisPath)\Rules' unless the CodeAnalysisIgnoreBuiltInRules property is set to true. */
    CodeAnalysisRuleDirectories?: StringPropertyType;
    /** Semicolon-separated list of Code Analysis rules. The rules are in the form '[+|-][!]Category#CheckId', where '+' enables the rule, '-' disables the rule, and '!' causes the rule to be treated as an error. For example, '-Microsoft.Naming#CA1700;+!Microsoft.Naming#CA1701'. The default is an empty string ('') which enables all rules. */
    CodeAnalysisRules?: StringPropertyType;
    /** A .ruleset file which contains a list of rules to run during analysis. The string can be a full path, a path relative to the project file, or a file name. If a file name is specified, the CodeAnalysisRuleSetDirectories property will be searched to find the file. The default is an empty string (''). */
    CodeAnalysisRuleSet?: StringPropertyType;
    /** Semicolon-separated list of directories in which to search for rule sets. The default is '$(VSINSTALLDIR)\Team Tools\Static Analysis Tools\Rule Sets' unless the CodeAnalysisIgnoreBuiltInRuleSets property is set to true. */
    CodeAnalysisRuleSetDirectories?: StringPropertyType;
    /** Comma-separated list of the type ('Active', 'Excluded', or 'Absent') of warnings and errors to save to the output report file. The default is 'Active'. */
    CodeAnalysisSaveMessagesToReport?: StringPropertyType;
    /** Indicates whether Code Analysis should search the Global Assembly Cache (GAC) for missing references that are encountered during analysis. The default is true. */
    CodeAnalysisSearchGlobalAssemblyCache?: string;
    /** Indicates whether to output a Code Analysis summary to the console after analysis. The default is false. */
    CodeAnalysisSummary?: string;
    /** The time, in seconds, that Code Analysis should wait for analysis of a single item to complete before it aborts analysis. Specify 0 to cause Code Analysis to wait indefinitely. The default is 120. */
    CodeAnalysisTimeout?: StringPropertyType;
    /** Indicates whether to treat all Code Analysis warnings as errors. The default is false. */
    CodeAnalysisTreatWarningsAsErrors?: string;
    /** Indicates whether to update the Code Analysis project (*.fxcop) specified in $(CodeAnalysisProject). This applies when there are changes during analysis. The default is false. */
    CodeAnalysisUpdateProject?: string;
    /** Indicates whether to include the name of the rule when Code Analysis emits a suppression. The default is true. */
    CodeAnalysisUseTypeNameInSuppression?: string;
    /** Indicates whether to output verbose Code Analysis diagnostic info to the console. The default is false. */
    CodeAnalysisVerbose?: string;
    CodePage?: StringPropertyType;
    /** Company name for the assembly manifest */
    Company?: StringPropertyType;
    /** Controls where source generated files are saved. */
    CompilerGeneratedFilesOutputPath?: StringPropertyType;
    Configuration?: StringPropertyType;
    ConfigurationName?: StringPropertyType;
    ConfigurationOverrideFile?: StringPropertyType;
    ConfigurationType?: StringPropertyType;
    /** Value indicating whether symbol files will be copied from NuGet packages by the compiler */
    CopyDebugSymbolFilesFromPackages?: string;
    /** Value indicating whether documentation files will be copied from NuGet packages by the compiler */
    CopyDocumentationFilesFromPackages?: string;
    /** Set to true to copy RazorGenerate items (.cshtml) to the publish directory. Typically Razor files are not needed for a published application if they participate in compilation at build-time or publish-time. By default, the Razor SDK will suppress the copying of RazorGenerate items to the publish directory. */
    CopyRazorGenerateFilesToPublishDirectory?: string;
    /** Set to true to copy reference assembly items to the publish directory. Typically reference assemblies are not needed for a published application if Razor compilation occurs at build-time or publish-time. By default, the Razor SDK will suppress the copying of reference assemblies to the publish directory. */
    CopyRefAssembliesToPublishDirectory?: string;
    /** Copyright details for the NuGet package */
    Copyright?: StringPropertyType;
    CreateDesktopShortcut?: string;
    /** boolean */
    CreateWebPageOnPublish?: string;
    CurrentSolutionConfigurationContents?: GenericPropertyType;
    DebugSecurityZoneURL?: StringPropertyType;
    /** Whether to emit symbols (boolean) */
    DebugSymbols?: string;
    /** none, pdbonly, embedded, portable, or full. From C# 6 onwards, pdbonly is the same as full. */
    DebugType?: DebugTypeType;
    DefaultClientScript?: StringPropertyType;
    DefaultHTMLPageLayout?: StringPropertyType;
    /** Default resource language. */
    DefaultLanguage?: StringPropertyType;
    DefaultTargetSchema?: StringPropertyType;
    DefineConstants?: StringPropertyType;
    /** Whether DEBUG is defined (boolean) */
    DefineDebug?: string;
    /** Whether TRACE is defined (boolean) */
    DefineTrace?: string;
    DelaySign?: StringPropertyType;
    DeployDirSuffix?: StringPropertyType;
    /** A long description of the NuGet package for UI display */
    Description?: StringPropertyType;
    /** Whether Visual Studio should do its own faster up-to-date check before Building, rather than invoke MSBuild to do a possibly more accurate one. You would set this to true if you have a heavily customized build process and builds in Visual Studio are not occurring when they should. */
    DisableFastUpToDateCheck?: string;
    DisableLangXtns?: StringPropertyType;
    /** Indicates whether Design Time Build should be disabled for referenced @(Protobuf) files. */
    DisableProtobufDesignTimeBuild?: string;
    /** When true, do not discover ProjectReference items representing projects referenced by this project's ProjectReferences. Applies only to projects using the .NET SDK. */
    DisableTransitiveProjectReferences?: string;
    DisableXbfGeneration?: string;
    /** boolean */
    DisallowUrlActivation?: string;
    DocumentationFile?: StringPropertyType;
    EmbedManifest?: StringPropertyType;
    /** Configures whether all of the @(RazorGenerate) items will be added as embedded files to the produced assembly. When true, everything in @(RazorGenerate) will be added to @(RazorEmbeddedFiles) and passed to CSC. */
    EmbedRazorGenerateSources?: string;
    /** Controls whether source generated files will be saved. */
    EmitCompilerGeneratedFiles?: string;
    EnableASPDebugging?: StringPropertyType;
    EnableASPXDebugging?: StringPropertyType;
    /** Enable default Compile item globs for source files. */
    EnableDefaultCompileItems?: string;
    /** Set to true to automatically include certain file types, such as .cshtml files, as content in the project. When referenced via Microsoft.NET.Sdk.Web, this additionally includes all files under wwwroot, and any config files. */
    EnableDefaultContentItems?: string;
    /** Defaults to true, and if set to false will disable all default item globs. */
    EnableDefaultItems?: string;
    /** Enable default None item globs (which cover most files in the project not covered by other globs). */
    EnableDefaultNoneItems?: string;
    /** Set to true to automatically include Razor (.razor) files in @(RazorComponent) from @(Content). */
    EnableDefaultRazorComponentItems?: string;
    /** Set to true to automatically include Razor (.cshtml) files in @(RazorGenerate) from @(Content). */
    EnableDefaultRazorGenerateItems?: string;
    /** Enable Store Submission from the packaging wizard. */
    EnableDirectStoreSubmission?: StringPropertyType;
    /** Indicates whether the .NET analyzers are enabled. They are enabled by default for projects that target .NET 5.0 or later. */
    EnableNETAnalyzers?: string;
    EnableSecurityDebugging?: StringPropertyType;
    /** Flag indicating whether to enable signing checks during app package generation. */
    EnableSigningChecks?: StringPropertyType;
    EnableSQLServerDebugging?: StringPropertyType;
    EnableUnmanagedDebugging?: StringPropertyType;
    /** Controls whether code style analysis rules configured as warnings or errors should execute on build and report violations. The default is false. */
    EnforceCodeStyleInBuild?: string;
    /** Windows Application Packaging project-specific: Enables the packaging of an executable without having the source code available. */
    EntryPointExe?: StringPropertyType;
    /** Windows Application Packaging project-specific: Relative path to entry point project file. */
    EntryPointProjectUniqueName?: StringPropertyType;
    ErrorLog?: StringPropertyType;
    ErrorReport?: StringPropertyType;
    ErrorReportUrl?: StringPropertyType;
    ExcludeDeploymentUrl?: string;
    ExcludedPermissions?: StringPropertyType;
    FallbackCulture?: StringPropertyType;
    FileAlignment?: StringPropertyType;
    FileUpgradeFlags?: StringPropertyType;
    /** Numeric value of the version for the assembly manifest in the format major.minor.build.revision (e.g. 2.4.0.1) */
    FileVersion?: StringPropertyType;
    /** Path to the final app manifest. */
    FinalAppxManifestName?: StringPropertyType;
    /** Full path to the final app package recipe. */
    FinalAppxPackageRecipe?: StringPropertyType;
    FormFactorID?: StringPropertyType;
    /** Sets the /sdkpath switch for a VB project to the specified value */
    FrameworkPathOverride?: StringPropertyType;
    /** Flag indicating whether to generate app package during the build. */
    GenerateAppxPackageOnBuild?: StringPropertyType;
    /** Value indicating whether a documentation file will be generated by the compiler */
    GenerateDocumentationFile?: string;
    GenerateLibraryLayout?: string;
    GenerateManifests?: StringPropertyType;
    /** Value indicating whether a NuGet package will be generated when the project is built */
    GeneratePackageOnBuild?: string;
    GenerateSerializationAssemblies?: StringPropertyType;
    HighEntropyVA?: StringPropertyType;
    HostInBrowser?: string;
    IgnoreImportLibrary?: string;
    /** Enable implicit global usings for the C# project. Possible values are enable, true, and disable. */
    ImplicitUsings?: ImplicitUsingsType;
    /** Flag indicating whether to include primary build outputs into the app package payload. */
    IncludeBuiltProjectOutputGroup?: StringPropertyType;
    /** Flag indicating whether to include COM files into the app package payload. */
    IncludeComFilesOutputGroup?: StringPropertyType;
    /** Flag indicating whether to include content files into the app package payload. */
    IncludeContentFilesProjectOutputGroup?: StringPropertyType;
    /** Flag indicating whether to include files marked as 'Copy local' into the app package payload. */
    IncludeCopyLocalFilesOutputGroup?: StringPropertyType;
    /** Flag indicating whether to include WinMD artifacts into the app package payload. */
    IncludeCopyWinmdArtifactsOutputGroup?: StringPropertyType;
    /** Flag indicating whether to include custom output group into the app package payload. */
    IncludeCustomOutputGroupForPackaging?: StringPropertyType;
    /** Flag indicating whether to include debug symbols into the app package payload. */
    IncludeDebugSymbolsProjectOutputGroup?: StringPropertyType;
    /** Flag indicating whether to include documentation into the app package payload. */
    IncludeDocumentationProjectOutputGroup?: StringPropertyType;
    /** Flag indicating whether to include resolved SDK references into the app package payload. */
    IncludeGetResolvedSDKReferences?: StringPropertyType;
    /** Flag indicating whether to include resource index (PRI) files into the app package payload. */
    IncludePriFilesOutputGroup?: StringPropertyType;
    /** Configures whether all Razor content items (.cshtml files) will be marked to be included in the produced NuGet package as content. All Content items are included in a NuGet package as content files. This setting can be used to control this behavior for Razor content items. */
    IncludeRazorContentInPack?: string;
    /** Flag indicating whether to include satellite DLLs into the app package payload. */
    IncludeSatelliteDllsProjectOutputGroup?: StringPropertyType;
    /** Flag indicating whether to include SDK redist into the app package payload. */
    IncludeSDKRedistOutputGroup?: StringPropertyType;
    /** Flag indicating whether to include SGen files into the app package payload. */
    IncludeSGenFilesOutputGroup?: StringPropertyType;
    /** Flag indicating whether to include source files into the app package payload. */
    IncludeSourceFilesProjectOutputGroup?: StringPropertyType;
    /** Product version of the assembly for UI display (e.g. 1.0 Beta) */
    InformationalVersion?: StringPropertyType;
    /** Flag indicating whether to insert reverse resource map during resource index generation. */
    InsertReverseMap?: StringPropertyType;
    Install?: StringPropertyType;
    /** Web, Unc, or Disk */
    InstallFrom?: StringPropertyType;
    InstallUrl?: StringPropertyType;
    /** Indicates whether an app runs in globalization-invariant mode without access to culture-specific data and behavior. */
    InvariantGlobalization?: string;
    /** Indicates whether a class library is compatible with native AOT. Setting to true will enable analyzers for trimming, single file, and AOT. */
    IsAotCompatible?: string;
    IsCodeSharingProject?: string;
    /** Indicates whether the project can be used to create a NuGet package. */
    IsPackable?: string;
    IsWebBootstrapper?: StringPropertyType;
    JCPA?: StringPropertyType;
    Keyword?: StringPropertyType;
    LangVersion?: StringPropertyType;
    /** Full path to a folder with package layout. */
    LayoutDir?: StringPropertyType;
    LinkIncremental?: StringPropertyType;
    /** Full path to makeappx.exe utility. */
    MakeAppxExeFullPath?: StringPropertyType;
    /** Full path to makepri.exe utility. */
    MakePriExeFullPath?: StringPropertyType;
    /** Name of the binary containing managed WinMD in-proc implementation. */
    ManagedWinmdInprocImplementation?: StringPropertyType;
    ManifestCertificateThumbprint?: StringPropertyType;
    ManifestKeyFile?: StringPropertyType;
    /** boolean */
    MapFileExtensions?: string;
    /** Matches the expression "\d\.\d\.\d\.\d" */
    MinimumRequiredVersion?: StringPropertyType;
    MinimumVisualStudioVersion?: StringPropertyType;
    MSBuildAllProjects?: StringPropertyType;
    /** Indicates whether to treat all warnings as errors when building a project. */
    MSBuildTreatWarningsAsErrors?: StringPropertyType;
    /** Indicates a semicolon delimited list of warnings to treat as errors when building a project. */
    MSBuildWarningsAsErrors?: StringPropertyType;
    /** Indicates a semicolon delimited list of warnings to treat as low importance messages when building a project. */
    MSBuildWarningsAsMessages?: StringPropertyType;
    MyType?: StringPropertyType;
    /** The locale ID for the NuGet package */
    NeutralLanguage?: StringPropertyType;
    NoConfig?: StringPropertyType;
    NoStandardLibraries?: StringPropertyType;
    /** Whether standard libraries (such as mscorlib) should be referenced automatically (boolean) */
    NoStdLib?: string;
    /** Comma separated list of disabled warnings */
    NoWarn?: StringPropertyType;
    /** Set the nullable annotations and warnings context for the C# project. Possible values are enable, disable, warnings and annotations. */
    Nullable?: NullableType;
    OldToolsVersion?: StringPropertyType;
    /** boolean */
    OpenBrowserOnPublish?: string;
    /** Should compiler optimize output (boolean) */
    Optimize?: string;
    /** Option Compare setting (Text or Binary) */
    OptionCompare?: StringPropertyType;
    /** Should Option Explicit be set (On or Off) */
    OptionExplicit?: StringPropertyType;
    /** Should Option Infer be set (On or Off) */
    OptionInfer?: StringPropertyType;
    /** Should Option Strict be set (On or Off) */
    OptionStrict?: StringPropertyType;
    OSVersion?: StringPropertyType;
    OutDir?: StringPropertyType;
    /** Path to output folder, with trailing slash */
    OutputPath?: StringPropertyType;
    /** Type of output to generate (WinExe, Exe, or Library) */
    OutputType?: StringPropertyType;
    /** Overwrite Store Submission that has been queued by a previous build. */
    OverwritePendingSubmission?: StringPropertyType;
    /** App package certificate key file. */
    PackageCertificateKeyFile?: StringPropertyType;
    /** The URL for a 64x64 image with transparent background to use as the icon for the NuGet package in UI display */
    PackageIconUrl?: StringPropertyType;
    /** The case-insensitive NuGet package identifier, which must be unique across nuget.org or whatever gallery the NuGet package will reside in. IDs may not contain spaces or characters that are not valid for a URL, and generally follow .NET namespace rules. */
    PackageId?: StringPropertyType;
    /** The project license's SPDX identifier. Only OSI and FSF approved licenses can use an identifier. Other licenses should use PackageLicenseFile. */
    PackageLicenseExpression?: StringPropertyType;
    /** A path to the package's license file. Should only be used when the package doesn't use an OSI or FSF approved license. */
    PackageLicenseFile?: StringPropertyType;
    /** The URL for the NuGet package's license, often shown in UI displays as well as nuget.org */
    PackageLicenseUrl?: StringPropertyType;
    /** The URL for the NuGet package's home page, often shown in UI displays as well as nuget.org */
    PackageProjectUrl?: StringPropertyType;
    /** A description of the changes made in this release of the NuGet package, often used in UI like the Updates tab of the Visual Studio Package Manager in place of the package description */
    PackageReleaseNotes?: StringPropertyType;
    /** Value indicating whether the client must prompt the consumer to accept the NuGet package license before installing the package */
    PackageRequireLicenseAcceptance?: string;
    /** A space-delimited list of tags and keywords that describe the NuGet package and aid discoverability of NuGet packages through search and filtering mechanisms */
    PackageTags?: StringPropertyType;
    /** Indicates what the intended package use is, e.g. .NET CLI global tool, standard dependency, etc. */
    PackageType?: StringPropertyType;
    /** Numeric value of the NuGet package version in the format major.minor.patch pattern (e.g. 1.0.1). Version numbers may include a pre-release suffix (e.g. 1.0.1-beta) */
    PackageVersion?: StringPropertyType;
    /** Full path to a text file containing packaging directory writes log. */
    PackagingDirectoryWritesLogPath?: StringPropertyType;
    /** Full path to a text file containing packaging file writes log. */
    PackagingFileWritesLogPath?: StringPropertyType;
    /** Indicate whether the NuGet package should be configured as a .NET tool suitable for use with "dotnet tool install". */
    PackAsTool?: string;
    /** Full path to pdbcopy.exe utility. */
    PdbCopyExeFullPath?: StringPropertyType;
    Platform?: StringPropertyType;
    PlatformFamilyName?: StringPropertyType;
    PlatformID?: StringPropertyType;
    PlatformName?: StringPropertyType;
    /** Full path to a folder where platform-specific bundle artifact list files are stored. */
    PlatformSpecificBundleArtifactsListDir?: StringPropertyType;
    /** Name of the folder where platform-specific bundle artifact lists are stored. */
    PlatformSpecificBundleArtifactsListDirName?: StringPropertyType;
    PlatformTarget?: StringPropertyType;
    PlatformToolset?: StringPropertyType;
    /** Command line to be run at the end of build */
    PostBuildEvent?: StringPropertyType;
    /** Command line to be run at the start of build */
    PreBuildEvent?: StringPropertyType;
    Prefer32Bit?: StringPropertyType;
    /** Value indicating whether reference assemblies can be used in dynamic compilation */
    PreserveCompilationContext?: string;
    ProduceReferenceAssembly?: string;
    /** Product name information for the assembly manifest */
    Product?: StringPropertyType;
    ProductName?: StringPropertyType;
    ProductVersion?: StringPropertyType;
    ProjectGuid?: StringPropertyType;
    /** File name to use for project-specific resource index file (PRI). */
    ProjectPriFileName?: StringPropertyType;
    /** Full path to project-specific resource index file (PRI). */
    ProjectPriFullPath?: StringPropertyType;
    /** Name of the resource index used in the generated .pri file. */
    ProjectPriIndexName?: StringPropertyType;
    ProjectType?: StringPropertyType;
    ProjectTypeGuids?: StringPropertyType;
    /** Indicates whether the project should produce native ahead-of-time compiled images during publish. */
    PublishAot?: string;
    PublisherName?: StringPropertyType;
    /** Indicates whether the project should produce ReadyToRun images during publish. */
    PublishReadyToRun?: string;
    /** Indicates whether the project should bundle all application-dependent files into a single binary during publish. */
    PublishSingleFile?: string;
    /** Indicates whether the project should produce trimmed assembly images during publish. */
    PublishTrimmed?: string;
    PublishUrl?: StringPropertyType;
    /** Indicates whether Razor files should be compiled at build time. */
    RazorCompileOnBuild?: string;
    /** Indicates whether Razor files should be compiled at publish time. */
    RazorCompileOnPublish?: string;
    /** Directory for Razor output. */
    RazorOutputPath?: StringPropertyType;
    /** File name (without extension) of the assembly produced by Razor. */
    RazorTargetName?: StringPropertyType;
    RecursePath?: StringPropertyType;
    /** Semi-colon separated list of folders to search during reference resolution */
    ReferencePath?: StringPropertyType;
    RegisterForComInterop?: StringPropertyType;
    RemoteDebugEnabled?: StringPropertyType;
    RemoteDebugMachine?: StringPropertyType;
    RemoveIntegerChecks?: StringPropertyType;
    ReportAnalyzer?: StringPropertyType;
    /** The type of the repository where the project is stored (e.g. git) */
    RepositoryType?: StringPropertyType;
    /** The URL for the repository where the project is stored */
    RepositoryUrl?: StringPropertyType;
    /** Full path to a folder containing resgen tool. */
    ResgenToolPath?: StringPropertyType;
    ResponseFile?: StringPropertyType;
    /** The feeds that NuGet will use for restoring packages for this project. */
    RestoreSources?: StringPropertyType;
    RootNamespace?: StringPropertyType;
    /** Disables analyzers at both build and design time. This property takes precedence over RunAnalyzersDuringBuild and RunAnalyzersDuringLiveAnalysis. Default is true. */
    RunAnalyzers?: string;
    /** Controls whether analyzers run at build time. Default is true. */
    RunAnalyzersDuringBuild?: string;
    /** Controls whether analyzers analyze code live at design time. Default is true. */
    RunAnalyzersDuringLiveAnalysis?: string;
    /** Indicates whether to run Code Analysis during the build. */
    RunCodeAnalysis?: StringPropertyType;
    RunPostBuildEvent?: StringPropertyType;
    /** Runtime identifier supported by the project (e.g. win10-x64) */
    RuntimeIdentifier?: StringPropertyType;
    /** Semi-colon separated list of runtime identifiers supported by the project (e.g. win10-x64;osx.10.11-x64;ubuntu.16.04-x64) */
    RuntimeIdentifiers?: StringPropertyType;
    /** Semi-colon separated list of culture names to preserve satellite resource assemblies during build and publish. Names must be a valid culture name (like en-US;it; or fr). If left empty, all satellite resource assemblies will be preserved. Defaults to empty. */
    SatelliteResourceLanguages?: StringPropertyType;
    SccLocalPath?: StringPropertyType;
    SccProjectName?: StringPropertyType;
    SccProvider?: StringPropertyType;
    SchemaVersion?: StringPropertyType;
    SecureScoping?: StringPropertyType;
    /** Indicates whether the runtime should enable the server garbage collection mode. */
    ServerGarbageCollection?: string;
    /** Full path to signtool.exe utility. */
    SignAppxPackageExeFullPath?: StringPropertyType;
    SignAssembly?: StringPropertyType;
    SignManifests?: StringPropertyType;
    SolutionDir?: StringPropertyType;
    SolutionExt?: StringPropertyType;
    SolutionFileName?: StringPropertyType;
    SolutionName?: StringPropertyType;
    SolutionPath?: StringPropertyType;
    StartAction?: StringPropertyType;
    StartArguments?: StringPropertyType;
    StartPage?: StringPropertyType;
    StartProgram?: StringPropertyType;
    /** Type that contains the main entry point */
    StartupObject?: StringPropertyType;
    StartURL?: StringPropertyType;
    StartWithIE?: StringPropertyType;
    StartWorkingDirectory?: StringPropertyType;
    /** Name of the store manifest file. */
    StoreManifestName?: StringPropertyType;
    SuiteName?: StringPropertyType;
    SupportUrl?: StringPropertyType;
    SuppressXamlWarnings?: StringPropertyType;
    TargetCulture?: StringPropertyType;
    TargetExt?: StringPropertyType;
    /** Framework that this project targets. Must be a Target Framework Moniker (e.g. netcoreapp1.0) */
    TargetFramework?: StringPropertyType;
    TargetFrameworkProfile?: StringPropertyType;
    /** Semi-colon separated list of frameworks that this project targets. Must be a Target Framework Moniker (e.g. netcoreapp1.0;net461) */
    TargetFrameworks?: StringPropertyType;
    TargetFrameworkVersion?: StringPropertyType;
    TargetName?: StringPropertyType;
    TargetPlatformIdentifier?: StringPropertyType;
    TargetPlatformMinVersion?: StringPropertyType;
    /** Full path to platform SDK root. */
    TargetPlatformSdkRootOverride?: StringPropertyType;
    TargetPlatformVersion?: StringPropertyType;
    TargetZone?: StringPropertyType;
    /** Indicates whether the runtime should enable tiered JIT compilation. */
    TieredCompilation?: string;
    /** A human-friendly title of the package, typically used in UI displays as on nuget.org and the Package Manager in Visual Studio. If not specified, the package ID is used instead. */
    Title?: StringPropertyType;
    /** Specifies the command that will invoke the tool after it's installed. */
    ToolCommandName?: StringPropertyType;
    TreatWarningsAsErrors?: StringPropertyType;
    /** Assemblies that should not be trimmed (specify the assembly name without extension). */
    TrimmerRootAssembly?: StringPropertyType;
    /** XML files that specify assemblies, types, and their members that should not be trimmed. */
    TrimmerRootDescriptor?: StringPropertyType;
    /** boolean */
    TrustUrlParameters?: string;
    TypeComplianceDiagnostics?: StringPropertyType;
    /** Configures the created packages. Possible values are: StoreAndSideload (produces the appxupload and the sideloaded packages), StoreUpload (produces only the appxupload package), and SideloadOnly(produces only the packages for sideloading). */
    UapAppxPackageBuildMode?: StringPropertyType;
    UICulture?: StringPropertyType;
    /** boolean */
    UpdateEnabled?: string;
    UpdateInterval?: StringPropertyType;
    /** Hours, Days, or Weeks */
    UpdateIntervalUnits?: StringPropertyType;
    /** Foreground or Background */
    UpdateMode?: StringPropertyType;
    /** boolean */
    UpdatePeriodically?: string;
    /** boolean */
    UpdateRequired?: string;
    UpdateUrl?: StringPropertyType;
    UpgradeBackupLocation?: StringPropertyType;
    UseAppConfigForCompiler?: string;
    UseApplicationTrust?: StringPropertyType;
    UseDebugLibraries?: string;
    /** Flag indicating whether to enable incremental registration of the app layout. */
    UseIncrementalAppxRegistration?: StringPropertyType;
    UseOfAtl?: StringPropertyType;
    UseOfMfc?: StringPropertyType;
    /** Indicates whether Razor code generation should use a persistent build server process. */
    UseRazorBuildServer?: string;
    /** The ID that will be used to locate the file storing secret configuration values for this project at development time. */
    UserSecretsId?: StringPropertyType;
    UseVSHostingProcess?: StringPropertyType;
    UseWindowsForms?: string;
    UseWPF?: string;
    UTF8OutPut?: StringPropertyType;
    VBRuntime?: StringPropertyType;
    VCTargetsPath?: StringPropertyType;
    /** Numeric value of the version in the format major.minor.patch (e.g. 2.4.0) */
    Version?: StringPropertyType;
    /** When Version is not specified, VersionPrefix represents the first fragment of the version string (e.g. 1.0.0). The syntax is VersionPrefix[-VersionSuffix]. */
    VersionPrefix?: StringPropertyType;
    /** When Version is not specified, VersionSuffix represents the second fragment of the version string (e.g. beta). The syntax is VersionPrefix[-VersionSuffix]. */
    VersionSuffix?: StringPropertyType;
    VisualStudioVersion?: StringPropertyType;
    VSINSTALLDIR?: StringPropertyType;
    VSTO_TrustAssembliesLocation?: StringPropertyType;
    /** Windows Application Packaging project-specific: Path to Windows Application Packaging project root folder. */
    WapProjPath?: StringPropertyType;
    /** integer between 0 and 5 inclusive */
    WarningLevel?: StringPropertyType;
    /** Comma separated list of warning numbers to treat as errors */
    WarningsAsErrors?: StringPropertyType;
    WcfConfigValidationEnabled?: string;
    WebPage?: StringPropertyType;
    WholeProgramOptimization?: StringPropertyType;
    Win32ResourceFile?: StringPropertyType;
    WsdlXsdCodeGenCollectionTypes?: StringPropertyType;
    WsdlXsdCodeGenEnabled?: string;
    WsdlXsdCodeGenEnableDataBinding?: string;
    WsdlXsdCodeGenGenerateAsynchronousOperations?: string;
    WsdlXsdCodeGenGenerateDataTypesOnly?: string;
    WsdlXsdCodeGenGenerateInternalTypes?: string;
    WsdlXsdCodeGenGenerateMessageContract?: string;
    WsdlXsdCodeGenGenerateSerializableTypes?: string;
    WsdlXsdCodeGenImportXmlTypes?: string;
    WsdlXsdCodeGenNamespaceMappings?: StringPropertyType;
    WsdlXsdCodeGenReuseTypesFlag?: string;
    WsdlXsdCodeGenReuseTypesMode?: WsdlXsdCodeGenReuseTypesModeType;
    WsdlXsdCodeGenSerializerMode?: WsdlXsdCodeGenSerializerModeType;
    WsdlXsdCodeGenUseSerializerForFaults?: string;
    WsdlXsdCodeGenWrapped?: string;
    XamlRootsLog?: StringPropertyType;
    XamlSavedStateFilePath?: StringPropertyType;
}
interface PropertyProxyType extends _PropertyProxyType { constructor: { new(): PropertyProxyType }; }

interface _PublishFileType extends _SimpleItemType {
    /** (boolean) */
    IncludeHash?: string[];
    /** (boolean) */
    IsAssembly?: string[];
    /** Display in user interface (optional, boolean) */
    Visible?: string[];
}
interface PublishFileType extends _PublishFileType { constructor: { new(): PublishFileType }; }

interface _RCType extends _TaskType {
    IgnoreStandardIncludePath: string;
    LogStandardErrorAsError: string;
    MinimalRebuildFromTracking: string;
    NullTerminateStrings: string;
    ShowProgress: string;
    SkippedExecution: string;
    TrackFileAccess: string;
}
interface RCType extends _RCType { constructor: { new(): RCType }; }

interface _ReadLinesFromFileType extends _TaskType { }
interface ReadLinesFromFileType extends _ReadLinesFromFileType { constructor: { new(): ReadLinesFromFileType }; }

interface _ReferenceType extends _SimpleItemType {
    /** Assembly name or filename */
    Include?: string;
    /** Whether the types in this reference need to embedded into the target assembly - interop assemblies only (optional, boolean) */
    EmbedInteropTypes?: string[];
    /** Whether the reference should be copied to the output folder (optional, boolean) */
    Private?: string[];
    /** Whether only the version in the fusion name should be referenced (optional, boolean) */
    SpecificVersion?: string[];
}
interface ReferenceType extends _ReferenceType { constructor: { new(): ReferenceType }; }

interface _RegisterAssemblyType extends _TaskType {
    CreateCodeBase: string;
}
interface RegisterAssemblyType extends _RegisterAssemblyType { constructor: { new(): RegisterAssemblyType }; }

interface _RemoveDirType extends _TaskType { }
interface RemoveDirType extends _RemoveDirType { constructor: { new(): RemoveDirType }; }

interface _RemoveDuplicatePayloadType extends _TaskType { }
interface RemoveDuplicatePayloadType extends _RemoveDuplicatePayloadType { constructor: { new(): RemoveDuplicatePayloadType }; }

interface _RemoveDuplicatePriFilesType extends _TaskType { }
interface RemoveDuplicatePriFilesType extends _RemoveDuplicatePriFilesType { constructor: { new(): RemoveDuplicatePriFilesType }; }

interface _RemoveDuplicateSDKReferencesType extends _TaskType { }
interface RemoveDuplicateSDKReferencesType extends _RemoveDuplicateSDKReferencesType { constructor: { new(): RemoveDuplicateSDKReferencesType }; }

interface _RemoveDuplicatesType extends _TaskType {
    HadAnyDuplicates: string;
}
interface RemoveDuplicatesType extends _RemoveDuplicatesType { constructor: { new(): RemoveDuplicatesType }; }

interface _RequiresFramework35SP1AssemblyType extends _TaskType {
    CreateDesktopShortcut: string;
    RequiresMinimumFramework35SP1: string;
    SigningManifests: string;
}
interface RequiresFramework35SP1AssemblyType extends _RequiresFramework35SP1AssemblyType { constructor: { new(): RequiresFramework35SP1AssemblyType }; }

interface _ResolveAssemblyReferenceType extends _TaskType {
    AutoUnify: string;
    FindDependencies: string;
    FindRelatedFiles: string;
    FindSatellites: string;
    FindSerializationAssemblies: string;
    IgnoreDefaultInstalledAssemblySubsetTables: string;
    IgnoreDefaultInstalledAssemblyTables: string;
    Silent: string;
}
interface ResolveAssemblyReferenceType extends _ResolveAssemblyReferenceType { constructor: { new(): ResolveAssemblyReferenceType }; }

interface _ResolveComReferenceType extends _TaskType {
    DelaySign: string;
    ExecuteAsTool: string;
    IncludeVersionInInteropName: string;
    NoClassMembers: string;
}
interface ResolveComReferenceType extends _ResolveComReferenceType { constructor: { new(): ResolveComReferenceType }; }

interface _ResolveKeySourceType extends _TaskType {
    ShowImportDialogDespitePreviousFailures: string;
    SuppressAutoClosePasswordPrompt: string;
}
interface ResolveKeySourceType extends _ResolveKeySourceType { constructor: { new(): ResolveKeySourceType }; }

interface _ResolveManifestFilesType extends _TaskType {
    SigningManifests: string;
}
interface ResolveManifestFilesType extends _ResolveManifestFilesType { constructor: { new(): ResolveManifestFilesType }; }

interface _ResolveNativeReferenceType extends _TaskType { }
interface ResolveNativeReferenceType extends _ResolveNativeReferenceType { constructor: { new(): ResolveNativeReferenceType }; }

interface _ResolveNonMSBuildProjectOutputType extends _TaskType { }
interface ResolveNonMSBuildProjectOutputType extends _ResolveNonMSBuildProjectOutputType { constructor: { new(): ResolveNonMSBuildProjectOutputType }; }

interface _ResourceCompile extends _SimpleItemType { }
export interface ResourceCompile extends _ResourceCompile { constructor: { new(): ResourceCompile }; }
export var ResourceCompile: { new(): ResourceCompile };

interface _ResourceCompileType extends _SimpleItemType { }
interface ResourceCompileType extends _ResourceCompileType { constructor: { new(): ResourceCompileType }; }

interface _ResourceType extends _SimpleItemType {
    $CopyToOutputDirectory: ResourceType$CopyToOutputDirectoryType;
    /** Semi-colon separated list of files (wildcards are allowed) */
    Include?: string;
    /** Copy file to output directory (optional, default Never) */
    CopyToOutputDirectory?: ResourceTypeCopyToOutputDirectoryType[];
}
interface ResourceType extends _ResourceType { constructor: { new(): ResourceType }; }

type ResourceType$CopyToOutputDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _ResourceType$CopyToOutputDirectoryType extends Primitive._string { content: ResourceType$CopyToOutputDirectoryType; }

type ResourceTypeCopyToOutputDirectoryType = ("Never" | "Always" | "PreserveNewest");
interface _ResourceTypeCopyToOutputDirectoryType extends Primitive._string { content: ResourceTypeCopyToOutputDirectoryType; }

export type runtime = string;
type _runtime = Primitive._string;

interface _SchemaItemType extends _SimpleItemType { }
export interface SchemaItemType extends _SchemaItemType { constructor: { new(): SchemaItemType }; }
export var SchemaItemType: { new(): SchemaItemType };

interface _SDKReferenceType extends _SimpleItemType {
    /** Name and version moniker representing an extension SDK */
    Include?: string;
}
interface SDKReferenceType extends _SDKReferenceType { constructor: { new(): SDKReferenceType }; }

interface _SetEnvType extends _TaskType {
    Prefix: string;
}
interface SetEnvType extends _SetEnvType { constructor: { new(): SetEnvType }; }

interface _SGenType extends _TaskType {
    DelaySign: string;
    LogStandardErrorAsError: string;
    ShouldGenerateSerializer: string;
    UseProxyTypes: string;
}
interface SGenType extends _SGenType { constructor: { new(): SGenType }; }

interface _SignAppxPackageType extends _TaskType {
    EnableSigningChecks: string;
    ExportCertificate: string;
}
interface SignAppxPackageType extends _SignAppxPackageType { constructor: { new(): SignAppxPackageType }; }

interface _SignFileType extends _TaskType { }
interface SignFileType extends _SignFileType { constructor: { new(): SignFileType }; }

interface _SimpleItemType extends BaseType {
    /** Optional expression evaluated to determine whether the items should be evaluated */
    Condition?: string;
    /** Semi-colon separated list of files (wildcards are allowed) or other item names to exclude from the Include list */
    Exclude?: string;
    /** Semi-colon separated list of files (wildcards are allowed) or other item names to include in this item list */
    Include?: string;
    /** Optional expression. Used to identify or order system and user elements */
    Label?: string;
    /** Semi-colon separated list of files (wildcards are allowed) or other item names to remove from the existing list contents */
    Remove?: string;
    /** Semi-colon separated list of files (wildcards are allowed) or other item names to be updated with the metadata from contained in this xml element */
    Update?: string;
}
export interface SimpleItemType extends _SimpleItemType { constructor: { new(): SimpleItemType }; }
export var SimpleItemType: { new(): SimpleItemType };

interface _StoreAssociationFileType extends _SimpleItemType {
    /** Display in user interface (optional, boolean). */
    Visible?: string;
}
interface StoreAssociationFileType extends _StoreAssociationFileType { constructor: { new(): StoreAssociationFileType }; }

interface _StringPropertyType extends Primitive._string {
    /** Optional expression evaluated to determine whether the property should be evaluated */
    Condition?: string;
    /** Optional expression. Used to identify or order system and user elements */
    Label?: string;
}
export interface StringPropertyType extends _StringPropertyType { constructor: { new(): StringPropertyType }; }
export var StringPropertyType: { new(): StringPropertyType };

interface _StripPrivateSymbolsType extends _ToolTaskType { }
interface StripPrivateSymbolsType extends _StripPrivateSymbolsType { constructor: { new(): StripPrivateSymbolsType }; }

/** Groups tasks into a section of the build process */
interface _TargetType extends BaseType {
    /** Optional semi-colon separated list of targets that this target should run after. */
    AfterTargets?: string;
    /** Optional semi-colon separated list of targets that this target should run before. */
    BeforeTargets?: string;
    /** Optional expression evaluated to determine whether the Target and the targets it depends on should be run */
    Condition?: string;
    /** Optional semi-colon separated list of targets that should be run before this target */
    DependsOnTargets?: string;
    /** Optional semi-colon separated list of files that form inputs into this target. Their timestamps will be compared with the timestamps of files in Outputs to determine whether the Target is up to date */
    Inputs?: string;
    /** Optional expression evaluated to determine whether duplicate items in the Target's Returns should be removed before returning them. The default is not to eliminate duplicates. */
    KeepDuplicateOutputs?: string;
    /** Optional expression. Used to identify or order system and user elements */
    Label?: string;
    /** Name of the target */
    Name: string;
    /** Optional semi-colon separated list of files that form outputs into this target. Their timestamps will be compared with the timestamps of files in Inputs to determine whether the Target is up to date */
    Outputs?: string;
    /** Optional expression evaluated to determine which items generated by the target should be returned by the target. If there are no Returns attributes on Targets in the file, the Outputs attributes are used instead for this purpose. */
    Returns?: string;
    ItemGroup?: ItemGroupType[];
    OnError?: OnErrorType[];
    PropertyGroup?: PropertyGroupType[];
    Task?: TaskProxyType[];
}
export interface TargetType extends _TargetType { constructor: { new(): TargetType }; }
export var TargetType: { new(): TargetType };

interface _TaskProxyType extends BaseType {
    AL?: ALType;
    AspNetCompiler?: AspNetCompilerType;
    AssignCulture?: AssignCultureType;
    AssignProjectConfiguration?: AssignProjectConfigurationType;
    AssignTargetPath?: AssignTargetPathType;
    AxImp?: AxImpType;
    CallTarget?: CallTargetType;
    CL?: CLType;
    CodeAnalysis?: CodeAnalysisType;
    CombinePath?: CombinePathType;
    ConvertToAbsolutePath?: ConvertToAbsolutePathType;
    Copy?: CopyType;
    CPPClean?: CPPCleanType;
    CreateAppStoreContainer?: CreateAppStoreContainerType;
    CreateCSharpManifestResourceName?: CreateCSharpManifestResourceNameType;
    CreateItem?: CreateItemType;
    CreatePriConfigXmlForFullIndex?: CreatePriConfigXmlForFullIndexType;
    CreatePriConfigXmlForMainPackageFileMap?: CreatePriConfigXmlWithPackagingElementTaskType;
    CreatePriConfigXmlForSplitting?: CreatePriConfigXmlForSplittingType;
    CreatePriConfigXmlTask?: CreatePriConfigXmlTaskType;
    CreatePriFilesForPortableLibraries?: CreatePriFilesForPortableLibrariesType;
    CreateProperty?: CreatePropertyType;
    CreateVisualBasicManifestResourceName?: CreateVisualBasicManifestResourceNameType;
    Csc?: CscType;
    Delete?: DeleteType;
    DownloadFile?: DownloadFileType;
    Error?: ErrorType;
    Exec?: ExecType;
    ExpandPayloadDirectories?: ExpandPayloadDirectoriesType;
    ExpandPriContent?: ExpandPriContentType;
    ExtractHashAlgorithmId?: ExtractHashAlgorithmIdType;
    FilterOutUnusedLanguagesResourceFileMaps?: FilterOutUnusedLanguagesResourceFileMapsType;
    FindAppConfigFile?: FindAppConfigFileType;
    FindInList?: FindInListType;
    FindUnderPath?: FindUnderPathType;
    FormatUrl?: FormatUrlType;
    FormatVersion?: FormatVersionType;
    GenerateApplicationManifest?: GenerateApplicationManifestType;
    GenerateAppxManifest?: GenerateAppxManifestType;
    GenerateAppxPackageRecipe?: GenerateAppxPackageRecipeType;
    GenerateAppxSymbolPackage?: GenerateAppxSymbolPackageType;
    GenerateBootstrapper?: GenerateBootstrapperType;
    GenerateDeploymentManifest?: GenerateDeploymentManifestType;
    GenerateLauncher?: GenerateLauncherType;
    GeneratePriConfigurationFiles?: GeneratePriConfigurationFilesType;
    GenerateProjectArchitecturesFile?: GenerateProjectArchitecturesFileType;
    GenerateProjectPriFile?: GenerateProjectPriFileType;
    GenerateResource?: GenerateResourceType;
    GenerateTrustInfo?: GenerateTrustInfoType;
    GetAppxBundlePlatforms?: GetAppxBundlePlatformsType;
    GetAssemblyIdentity?: GetAssemblyIdentityType;
    GetDefaultResourceLanguage?: GetDefaultResourceLanguageType;
    GetFileHash?: GetFileHashType;
    GetFrameworkPath?: GetFrameworkPathType;
    GetFrameworkSdkPackages?: GetFrameworkSdkPackagesType;
    GetFrameworkSdkPath?: GetFrameworkSdkPathType;
    GetOutputFileName?: GetOutputFileNameType;
    GetPackageArchitecture?: GetPackageArchitectureType;
    GetReferenceAssemblyPaths?: GetReferenceAssemblyPathsType;
    GetSdkPropertyValue?: GetSdkPropertyValueType;
    GetSdkToolFullPath?: GetSdkToolFullPathType;
    GetWindowsDesktopSdkDir?: GetWindowsDesktopSdkDirType;
    IsAssembly?: IsAssemblyType;
    LC?: LCType;
    LIB?: LIBType;
    Link?: LinkType;
    MakeAppxBundle?: MakeAppxBundleType;
    MakeAppxPack?: MakeAppxPackType;
    MakeDir?: MakeDirType;
    Message?: MessageType;
    Move?: MoveType;
    MSBuild?: MSBuildType;
    Mt?: MtType;
    ParsePlatformSpecificBundleArtifactsLists?: ParsePlatformSpecificBundleArtifactsListsType;
    RC?: RCType;
    ReadLinesFromFile?: ReadLinesFromFileType;
    RegisterAssembly?: RegisterAssemblyType;
    RemoveDir?: RemoveDirType;
    RemoveDuplicatePayload?: RemoveDuplicatePayloadType;
    RemoveDuplicatePriFiles?: RemoveDuplicatePriFilesType;
    RemoveDuplicates?: RemoveDuplicatesType;
    RemoveDuplicateSDKReferences?: RemoveDuplicateSDKReferencesType;
    RequiresFramework35SP1Assembly?: RequiresFramework35SP1AssemblyType;
    ResolveAssemblyReference?: ResolveAssemblyReferenceType;
    ResolveComReference?: ResolveComReferenceType;
    ResolveKeySource?: ResolveKeySourceType;
    ResolveManifestFiles?: ResolveManifestFilesType;
    ResolveNativeReference?: ResolveNativeReferenceType;
    ResolveNonMSBuildProjectOutput?: ResolveNonMSBuildProjectOutputType;
    SetEnv?: SetEnvType;
    SGen?: SGenType;
    SignAppxPackage?: SignAppxPackageType;
    SignFile?: SignFileType;
    StripPrivateSymbols?: StripPrivateSymbolsType;
    Telemetry?: TelemetryType;
    TlbImp?: TlbImpType;
    Touch?: TouchType;
    UnregisterAssembly?: UnregisterAssemblyType;
    Unzip?: UnzipType;
    UpdateAppxManifestForBundle?: UpdateAppxManifestForBundleType;
    UpdateMainPackageFileMap?: UpdateMainPackageFileMapType;
    UpdateManifest?: UpdateManifestType;
    ValidateAppxManifest?: ValidateAppxManifestType;
    ValidateAppxManifestItems?: ValidateAppxManifestItemsType;
    ValidateAppxPackage?: ValidateAppxPackageType;
    ValidateStoreManifest?: ValidateStoreManifestType;
    Vbc?: VbcType;
    VCBuild?: VCBuildType;
    VCMessage?: VCMessageType;
    VerifyFileHash?: VerifyFileHashType;
    Warning?: WarningType;
    WriteCodeFragment?: WriteCodeFragmentType;
    WriteLinesToFile?: WriteLinesToFileType;
    XSD?: XSDType;
    XslTransformation?: XslTransformationType;
    ZipDirectory?: ZipDirectoryType;
}
interface TaskProxyType extends _TaskProxyType { constructor: { new(): TaskProxyType }; }

interface _TaskType extends BaseType {
    /** Defines the bitness of the task if it must be run specifically in a 32bit or 64bit process. If not specified, it will run with the bitness of the build process.  If there are multiple tasks defined in UsingTask with the same name but with different Architecture attribute values, the value of the Architecture attribute specified here will be used to match and select the correct task */
    Architecture?: string;
    /** Optional expression evaluated to determine whether the task should be executed */
    Condition?: string;
    /** Optional boolean indicating whether a recoverable task error should be ignored. Default false */
    ContinueOnError?: string;
    /** Defines the .NET runtime of the task. This must be specified if the task must run on a specific version of the .NET runtime. If not specified, the task will run on the runtime being used by the build process. If there are multiple tasks defined in UsingTask with the same name but with different Runtime attribute values, the value of the Runtime attribute specified here will be used to match and select the correct task */
    Runtime?: string;
    /** Optional element specifying a specific task output to be gathered */
    Output?: TaskTypeOutputType[];
}
export interface TaskType extends _TaskType { constructor: { new(): TaskType }; }
export var TaskType: { new(): TaskType };

interface _TaskTypeOutputType extends BaseType {
    /** Optional expression evaluated to determine whether the output should be gathered */
    Condition?: string;
    /** Optional name of an item list to put the gathered outputs into. Either ItemName or PropertyName must be specified */
    ItemName?: string;
    /** Optional name of a property to put the gathered output into. Either PropertyName or ItemName must be specified */
    PropertyName?: string;
    /** Task parameter to gather. Matches the name of a .NET Property on the task class that has an [Output] attribute */
    TaskParameter: string;
}
interface TaskTypeOutputType extends _TaskTypeOutputType { constructor: { new(): TaskTypeOutputType }; }

interface _TelemetryType extends _TaskType { }
interface TelemetryType extends _TelemetryType { constructor: { new(): TelemetryType }; }

interface _TlbImpType extends _TaskType {
    DelaySign: string;
    LogStandardErrorAsError: string;
    NoLogo: string;
    PreventClassMembers: string;
    SafeArrayAsSystemArray: string;
    Silent: string;
    Verbose: string;
}
interface TlbImpType extends _TlbImpType { constructor: { new(): TlbImpType }; }

interface _ToolTaskType extends _TaskType {
    EchoOff: string;
    LogStandardErrorAsError: string;
    UseCommandProcessor: string;
    YieldDuringToolExecution: string;
}
export interface ToolTaskType extends _ToolTaskType { constructor: { new(): ToolTaskType }; }
export var ToolTaskType: { new(): ToolTaskType };

interface _TouchType extends _TaskType {
    AlwaysCreate: string;
    ForceTouch: string;
}
interface TouchType extends _TouchType { constructor: { new(): TouchType }; }

interface _UnregisterAssemblyType extends _TaskType { }
interface UnregisterAssemblyType extends _UnregisterAssemblyType { constructor: { new(): UnregisterAssemblyType }; }

interface _UnzipType extends _TaskType {
    OverwriteReadOnlyFiles: string;
    SkipUnchangedFiles: string;
}
interface UnzipType extends _UnzipType { constructor: { new(): UnzipType }; }

interface _UpdateAppxManifestForBundleType extends _TaskType { }
interface UpdateAppxManifestForBundleType extends _UpdateAppxManifestForBundleType { constructor: { new(): UpdateAppxManifestForBundleType }; }

interface _UpdateMainPackageFileMapType extends _TaskType { }
interface UpdateMainPackageFileMapType extends _UpdateMainPackageFileMapType { constructor: { new(): UpdateMainPackageFileMapType }; }

interface _UpdateManifestType extends _TaskType { }
interface UpdateManifestType extends _UpdateManifestType { constructor: { new(): UpdateManifestType }; }

interface _UpToDateCheckBuiltType extends _SimpleItemType { }
interface UpToDateCheckBuiltType extends _UpToDateCheckBuiltType { constructor: { new(): UpToDateCheckBuiltType }; }

interface _UpToDateCheckInputType extends _SimpleItemType { }
interface UpToDateCheckInputType extends _UpToDateCheckInputType { constructor: { new(): UpToDateCheckInputType }; }

interface _UpToDateCheckOutputType extends _SimpleItemType { }
interface UpToDateCheckOutputType extends _UpToDateCheckOutputType { constructor: { new(): UpToDateCheckOutputType }; }

/** Contains the inline task implementation. Content is opaque to MSBuild. */
interface _UsingTaskBodyType extends BaseType {
    /** Whether the body should have properties expanded before use. Defaults to false. */
    Evaluate?: string;
}
export interface UsingTaskBodyType extends _UsingTaskBodyType { constructor: { new(): UsingTaskBodyType }; }
export var UsingTaskBodyType: { new(): UsingTaskBodyType };

/** Defines the assembly containing a task's implementation, or contains the implementation itself. */
interface _UsingTaskType extends BaseType {
    /** Defines the architecture of the task host that this task should be run in.  Currently supported values:  x86, x64, CurrentArchitecture, and * (any).  If Architecture is not specified, either the task will be run within the MSBuild process, or the task host will be launched using the architecture of the parent MSBuild process */
    Architecture?: string;
    /** Optional path to assembly containing the task. Either AssemblyName or AssemblyFile must be used */
    AssemblyFile?: string;
    /** Optional name of assembly containing the task. Either AssemblyName or AssemblyFile must be used */
    AssemblyName?: string;
    /** Optional expression evaluated to determine whether the declaration should be evaluated */
    Condition?: string;
    /** Defines the .NET runtime version of the task host that this task should be run in.  Currently supported values:  CLR2, CLR4, CurrentRuntime, and * (any).  If Runtime is not specified, either the task will be run within the MSBuild process, or the task host will be launched using the runtime of the parent MSBuild process */
    Runtime?: string;
    /** Name of the task factory class in the assembly */
    TaskFactory?: string;
    /** Name of task class in the assembly */
    TaskName: string;
    ParameterGroup?: ParameterGroupType;
    Task?: UsingTaskBodyType;
}
export interface UsingTaskType extends _UsingTaskType { constructor: { new(): UsingTaskType }; }
export var UsingTaskType: { new(): UsingTaskType };

interface _UsingType extends _SimpleItemType {
    /** Optional alias for the namespace or type. */
    Alias?: string;
    /** The namespace or type identifier to add, e.g. Microsoft.AspNetCore */
    Include: string;
    /** Determines whether the identifier should be registered as a static import. */
    Static?: string;
}
interface UsingType extends _UsingType { constructor: { new(): UsingType }; }

interface _ValidateAppxManifestItemsType extends _TaskType {
    AppxPackageProject: string;
}
interface ValidateAppxManifestItemsType extends _ValidateAppxManifestItemsType { constructor: { new(): ValidateAppxManifestItemsType }; }

interface _ValidateAppxManifestType extends _TaskType {
    StrictManifestValidationEnabled: string;
    ValidateManifest: string;
    ValidateWinmds: string;
}
interface ValidateAppxManifestType extends _ValidateAppxManifestType { constructor: { new(): ValidateAppxManifestType }; }

interface _ValidateAppxPackageType extends _TaskType {
    AllowDebugFrameworkReferencesInManifest: string;
}
interface ValidateAppxPackageType extends _ValidateAppxPackageType { constructor: { new(): ValidateAppxPackageType }; }

interface _ValidateStoreManifestType extends _TaskType { }
interface ValidateStoreManifestType extends _ValidateStoreManifestType { constructor: { new(): ValidateStoreManifestType }; }

interface _VbcType extends _TaskType {
    DelaySign: string;
    EmitDebugInformation: string;
    GenerateDocumentation: string;
    LogStandardErrorAsError: string;
    NoConfig: string;
    NoLogo: string;
    NoStandardLib: string;
    NoVBRuntimeReference: string;
    NoWarnings: string;
    NoWin32Manifest: string;
    Optimize: string;
    OptionExplicit: string;
    OptionInfer: string;
    OptionStrict: string;
    RemoveIntegerChecks: string;
    TargetCompactFramework: string;
    TreatWarningsAsErrors: string;
    UseHostCompilerIfAvailable: string;
    Utf8Output: string;
}
interface VbcType extends _VbcType { constructor: { new(): VbcType }; }

interface _VCBuildType extends _TaskType {
    Clean: string;
    Rebuild: string;
    UseEnvironment: string;
    UserEnvironment: string;
}
interface VCBuildType extends _VCBuildType { constructor: { new(): VCBuildType }; }

interface _VCMessageType extends _TaskType { }
interface VCMessageType extends _VCMessageType { constructor: { new(): VCMessageType }; }

interface _VerifyFileHashType extends _TaskType { }
interface VerifyFileHashType extends _VerifyFileHashType { constructor: { new(): VerifyFileHashType }; }

interface _WarningType extends _TaskType { }
interface WarningType extends _WarningType { constructor: { new(): WarningType }; }

interface _WebReferenceUrlType extends _SimpleItemType {
    /** URL to web service */
    Include?: string;
}
interface WebReferenceUrlType extends _WebReferenceUrlType { constructor: { new(): WebReferenceUrlType }; }

/** Groups PropertyGroup and/or ItemGroup elements */
interface _WhenType extends BaseType {
    /** Optional expression evaluated to determine whether the child PropertyGroups and/or ItemGroups should be used */
    Condition: string;
    Choose?: ChooseType[];
    ItemGroup?: ItemGroupType[];
    PropertyGroup?: PropertyGroupType[];
}
export interface WhenType extends _WhenType { constructor: { new(): WhenType }; }
export var WhenType: { new(): WhenType };

interface _WriteCodeFragmentType extends _TaskType { }
interface WriteCodeFragmentType extends _WriteCodeFragmentType { constructor: { new(): WriteCodeFragmentType }; }

interface _WriteLinesToFileType extends _TaskType {
    Overwrite: string;
    WriteOnlyWhenDifferent: string;
}
interface WriteLinesToFileType extends _WriteLinesToFileType { constructor: { new(): WriteLinesToFileType }; }

type WsdlXsdCodeGenReuseTypesModeType = ("All" | "Partial");
interface _WsdlXsdCodeGenReuseTypesModeType extends Primitive._string { content: WsdlXsdCodeGenReuseTypesModeType; }

type WsdlXsdCodeGenSerializerModeType = ("XmlSerializer" | "DataContractSerializer");
interface _WsdlXsdCodeGenSerializerModeType extends Primitive._string { content: WsdlXsdCodeGenSerializerModeType; }

interface _XdcmakeType extends _SimpleItemType { }
interface XdcmakeType extends _XdcmakeType { constructor: { new(): XdcmakeType }; }

interface _XSDType extends _TaskType {
    LogStandardErrorAsError: string;
    MinimalRebuildFromTracking: string;
    SkippedExecution: string;
    SuppressStartupBanner: string;
    TrackFileAccess: string;
}
interface XSDType extends _XSDType { constructor: { new(): XSDType }; }

interface _XslTransformationType extends _TaskType { }
interface XslTransformationType extends _XslTransformationType { constructor: { new(): XslTransformationType }; }

interface _ZipDirectoryType extends _TaskType {
    Overwrite: string;
    SourceDirectory: string;
}
interface ZipDirectoryType extends _ZipDirectoryType { constructor: { new(): ZipDirectoryType }; }

export interface document extends BaseType {
    AppxBundleResourceFileMapsIntermediate: AppxBundleResourceFileMapsIntermediateType;
    GetResolvedSDKReferencesOutput: GetResolvedSDKReferencesOutputType;
    PackagingOutputsUnexpanded: PackagingOutputsUnexpandedType;
    ProjectArchitectureFromPayload: ProjectArchitectureFromPayloadType;
    ProjectArchitectureItem: ProjectArchitectureItemType;
    StoreManifestSchemaDir: StringPropertyType;
    /** Indicates whether to enable acceleration when building in Visual Studio (boolean). */
    AccelerateBuildsInVisualStudio: string;
    AdditionalFileItemNames: StringPropertyType;
    AL: ALType;
    /** Flag indicating whether to allow local network loopback. */
    AllowLocalNetworkLoopback: StringPropertyType;
    AllowUnsafeBlocks: StringPropertyType;
    /** Customizes the set of rules that are enabled by default. */
    AnalysisLevel: AnalysisLevelType;
    /** Customizes the set of rules that are enabled by default. */
    AnalysisMode: AnalysisModeType;
    /** An assembly containing diagnostic analyzers */
    Analyzer: AnalyzerType;
    /** Used by Xamarin.Android projects. A boolean value that indicates whether the project is for an Android Application (True) or for an Android Library Project (False or not present). */
    AndroidApplication: string;
    /** Used by Xamarin.Android projects. A string property that indicates which Android dex compiler is used during the Xamarin.Android build process. */
    AndroidDexTool: AndroidDexToolType;
    /** Used by Xamarin.Android projects. A boolean property that determines whether or not AOT profiles are used during Ahead-of-Time compilation. */
    AndroidEnableProfiledAot: string;
    /** Used by Xamarin.Android projects. A string property that specifies which type of linking should be performed on assemblies contained within the Android package. Only used in Android Application projects. */
    AndroidLinkMode: AndroidLinkModeType;
    /** Used by Xamarin.Android projects. Specifies a semicolon-delimited (;) list of assembly names, without file extensions, of assemblies that should not be linked. */
    AndroidLinkSkip: StringPropertyType;
    /** Used by Xamarin.Android projects. A string property that indicates which code shrinker is used for Java code. */
    AndroidLinkTool: AndroidLinkToolType;
    /** Used by Xamarin.Android projects. A string property that indicates if you want to package the Android application as an APK file or Android App Bundle. */
    AndroidPackageFormat: AndroidPackageFormatType;
    /** Used by Xamarin.Android projects. A string property that contains a semicolon (;)-delimited list of ABIs which should be included into the application. */
    AndroidSupportedAbis: StringPropertyType;
    /** Used by Xamarin.Android projects. A boolean property that determines whether or not assemblies will be Ahead-of-Time compiled into native code. */
    AotAssemblies: string;
    AppConfigForCompiler: StringPropertyType;
    /** Name of folder for Application Designer */
    AppDesignerFolder: StringPropertyType;
    /** Customizes the application default font. The format equivalent to the output of FontConverter.ConvertToInvariantString(). Applies only to Windows Forms projects. */
    ApplicationDefaultFont: StringPropertyType;
    /** XAML file that contains the application definition, only one can be defined */
    ApplicationDefinition: ApplicationDefinitionType;
    /** Customizes the application DPI awareness mode. Applies only to Windows Forms projects. */
    ApplicationHighDpiMode: ApplicationHighDpiModeType;
    ApplicationIcon: StringPropertyType;
    /** integer */
    ApplicationRevision: StringPropertyType;
    /** Indicates whether to set UseCompatibleTextRendering property defined on certain controls (boolean). Applies only to Windows Forms projects. */
    ApplicationUseCompatibleTextRendering: string;
    /** Matches the expression "\d\.\d\.\d\.(\d|\*)" */
    ApplicationVersion: StringPropertyType;
    /** Indicates whether to enable or disable visual styles (boolean). Applies only to Windows Forms projects. */
    ApplicationVisualStyles: string;
    /** Flag indicating whether to auto-increment package revision. */
    AppxAutoIncrementPackageRevision: StringPropertyType;
    /** Flag indicating whether packaging targets will produce an app bundle. */
    AppxBundle: StringPropertyType;
    /** '|'-delimited list of resource qualifiers which will be used for automatic resource pack splitting. */
    AppxBundleAutoResourcePackageQualifiers: StringPropertyType;
    /** Full path to a folder where app bundle will be produced. */
    AppxBundleDir: StringPropertyType;
    /** Suffix to append to app bundle folder. */
    AppxBundleFolderSuffix: StringPropertyType;
    /** Full path to a log file containing a list of generated files during generation of main package file map. */
    AppxBundleMainPackageFileMapGeneratedFilesListPath: StringPropertyType;
    /** Full path to an intermediate main package file map. */
    AppxBundleMainPackageFileMapIntermediatePath: StringPropertyType;
    /** Prefix used for intermediate main package resources .pri and .map.txt files. */
    AppxBundleMainPackageFileMapIntermediatePrefix: StringPropertyType;
    /** Full path to an intermediate main package .pri file. */
    AppxBundleMainPackageFileMapIntermediatePriPath: StringPropertyType;
    /** Full path to a main package file map. */
    AppxBundleMainPackageFileMapPath: StringPropertyType;
    /** Prefix used for main package resources .pri and .map.txt files. */
    AppxBundleMainPackageFileMapPrefix: StringPropertyType;
    /** Suffix used before extension of resource map files. */
    AppxBundleMainPackageFileMapSuffix: StringPropertyType;
    /** '|'-delimited list of platforms which will be included in an app bundle. */
    AppxBundlePlatforms: StringPropertyType;
    /** Full path to the priconfig.xml file used for generating main package file map. */
    AppxBundlePriConfigXmlForMainPackageFileMapFileName: StringPropertyType;
    /** Full path to the priconfig.xml file used for splitting resource packs. */
    AppxBundlePriConfigXmlForSplittingFileName: StringPropertyType;
    /** A platform which will be used to produce an app bundle. */
    AppxBundleProducingPlatform: StringPropertyType;
    /** A platform which will be used to produce resource packs for an app bundle. */
    AppxBundleResourcePacksProducingPlatform: StringPropertyType;
    /** Full path to a log file containing a list of generated files during resource splitting. */
    AppxBundleSplitResourcesGeneratedFilesListPath: StringPropertyType;
    /** Full path to split resources .pri file. */
    AppxBundleSplitResourcesPriPath: StringPropertyType;
    /** Prefix used for split resources .pri and .map.txt files. */
    AppxBundleSplitResourcesPriPrefix: StringPropertyType;
    /** Full path to a log file containing a detected qualifiers during resource splitting. */
    AppxBundleSplitResourcesQualifiersPath: StringPropertyType;
    /** Flag indicating whether CopyLocal files group should include XML files. */
    AppxCopyLocalFilesOutputGroupIncludeXmlFiles: StringPropertyType;
    /** Additional parameters to pass to makepri.exe when generating PRI file for a portable library. */
    AppxCreatePriFilesForPortableLibrariesAdditionalMakepriExeParameters: StringPropertyType;
    /** Default hash algorithm ID, used for signing an app package. */
    AppxDefaultHashAlgorithmId: StringPropertyType;
    /** '|'-delimited list of key=value pairs representing default resource qualifiers. */
    AppxDefaultResourceQualifiers: StringPropertyType;
    /** Flag to exclude XAML files when XBF is present. */
    AppxExcludeXamlFromLibraryLayoutsWhenXbfIsPresent: StringPropertyType;
    /** Flag to exclude XBF files when XAML is present. */
    AppxExcludeXbfFromSdkPayloadWhenXamlIsPresent: StringPropertyType;
    /** Additional parameters to pass to makepri.exe when extracting payload file names. */
    AppxExpandPriContentAdditionalMakepriExeParameters: StringPropertyType;
    /** Flag indicating whether to filter out unused language resource file maps. */
    AppxFilterOutUnusedLanguagesResourceFileMaps: StringPropertyType;
    /** Flag indicating whether to generate resource index files (PRI files) during packaging. */
    AppxGeneratePriEnabled: StringPropertyType;
    /** Additional parameters to pass to makepri.exe when generating project PRI file. */
    AppxGenerateProjectPriFileAdditionalMakepriExeParameters: StringPropertyType;
    /** Flag indicating whether to enable harvesting of WinMD registration information. */
    AppxHarvestWinmdRegistration: StringPropertyType;
    /** Hash algorithm URI. */
    AppxHashUri: AppxHashUriType;
    /** Full path to the folder where package layout will be prepared when producing an app bundle. */
    AppxLayoutDir: StringPropertyType;
    /** Name of the folder where package layout will be prepared when producing an app bundle. */
    AppxLayoutFolderName: StringPropertyType;
    /** app manifest template */
    AppxManifest: AppxManifestType;
    /** XPath queries used to extract file names from the app manifest. */
    AppxManifestFileNameQuery: SimpleItemType;
    /** XPath queries used to define image files in the app manifest and restrictions on them. */
    AppxManifestImageFileNameQuery: AppxManifestImageFileNameQueryType;
    /** App manifest metadata item. Can be a literal, or it can be a path to a binary to extract version from. */
    AppxManifestMetadata: AppxManifestMetadataType;
    /** App manifest schema file. */
    AppxManifestSchema: SchemaItemType;
    /** Full path to packaging build tasks assembly. */
    AppxMSBuildTaskAssembly: StringPropertyType;
    /** Full path to a folder containing packaging build targets and tasks assembly. */
    AppxMSBuildToolsPath: StringPropertyType;
    /** Targeted maximum OS version tested. */
    AppxOSMaxVersionTested: StringPropertyType;
    /** Flag indicating whether maximum OS version tested in app manifest should be replaced. */
    AppxOSMaxVersionTestedReplaceManifestVersion: StringPropertyType;
    /** Targeted minimum OS version. */
    AppxOSMinVersion: StringPropertyType;
    /** Flag indicating whether minimum OS version in app manifest should be replaced. */
    AppxOSMinVersionReplaceManifestVersion: StringPropertyType;
    /** Flag marking current project as capable of being packaged as an app package. */
    AppxPackage: StringPropertyType;
    /** Flag indicating whether to allow inclusion of debug framework references in an app manifest. */
    AppxPackageAllowDebugFrameworkReferencesInManifest: StringPropertyType;
    /** Additional qualifier to append to AppxPackageDir. */
    AppxPackageArtifactsDir: StringPropertyType;
    /** Full path to a folder where app packages will be saved. */
    AppxPackageDir: StringPropertyType;
    /** Name of the folder where app packages are produced. */
    AppxPackageDirName: StringPropertyType;
    /** Full path to app package file map. */
    AppxPackageFileMap: StringPropertyType;
    /** Flag indicating whether to include private symbols in symbol packages. */
    AppxPackageIncludePrivateSymbols: StringPropertyType;
    /** Name of the app package to generate. */
    AppxPackageName: StringPropertyType;
    /** Full path to the app package file. */
    AppxPackageOutput: StringPropertyType;
    AppxPackagePayload: AppxPackagePayloadType;
    /** Full path to the app package recipe. */
    AppxPackageRecipe: StringPropertyType;
    /** Flag indicating whether to enable signing of app packages. */
    AppxPackageSigningEnabled: StringPropertyType;
    /** Digest algorithm used by the RFC 3161 timestamp server. */
    AppxPackageSigningTimestampDigestAlgorithm: StringPropertyType;
    /** RFC 3161 timestamp server's URL. */
    AppxPackageSigningTimestampServerUrl: StringPropertyType;
    /** Name of the folder where test app packages will be copied */
    AppxPackageTestDir: StringPropertyType;
    /** Flag indicating whether to enable validation of app packages. */
    AppxPackageValidationEnabled: StringPropertyType;
    /** Full path to the packaging info file which will contain paths to produced packages. */
    AppxPackagingInfoFile: StringPropertyType;
    /** Flag indicating whether to enable prepending initial path when indexing RESW and RESJSON files in class libraries. */
    AppxPrependPriInitialPath: StringPropertyType;
    /** Path to an XML file containing default element for priconfi.xml file. */
    AppxPriConfigXmlDefaultSnippetPath: StringPropertyType;
    /** Path to an XML file containing packaging element for priconfi.xml file. */
    AppxPriConfigXmlPackagingSnippetPath: StringPropertyType;
    /** Initial path when indexing RESW and RESJSON files in class libraries. */
    AppxPriInitialPath: StringPropertyType;
    /** Reserved file name which cannot appear in the app package. */
    AppxReservedFileName: SimpleItemType;
    /** Flag indicating whether to skip unchanged files when copying files during creation of app packages. */
    AppxSkipUnchangedFiles: StringPropertyType;
    /** Name of the app store container to generate. */
    AppxStoreContainer: StringPropertyType;
    /** Flag indicating whether to enable strict manifest validation. */
    AppxStrictManifestValidationEnabled: StringPropertyType;
    /** Flag indicating whether to generate a symbol package when an app package is created. */
    AppxSymbolPackageEnabled: StringPropertyType;
    /** Full path to the app symbol package file. */
    AppxSymbolPackageOutput: StringPropertyType;
    /** Full path to a directory where stripped PDBs will be stored. */
    AppxSymbolStrippedDir: StringPropertyType;
    /** Name of any file which is present on the machine and should not be part of the app payload. */
    AppxSystemBinary: SimpleItemType;
    /** Flag indicating whether to create test layout when an app package is created. */
    AppxTestLayoutEnabled: StringPropertyType;
    /** Flag indicating whether to use hard links if possible when copying files during creation of app packages. */
    AppxUseHardlinksIfPossible: StringPropertyType;
    /** Flag indicating whether to validate app manifest. */
    AppxValidateAppxManifest: StringPropertyType;
    /** Flag indicating whether to validate store manifest. */
    AppxValidateStoreManifest: StringPropertyType;
    /** Path to the folder where harvested WinMD registration information will be cached. */
    AppxWinMdCacheDir: StringPropertyType;
    /** Flag indicating whether to cache the harvested WinMD registration information. */
    AppxWinMdCacheEnabled: StringPropertyType;
    AspNetCompiler: AspNetCompilerType;
    AspNetConfiguration: StringPropertyType;
    /** Indicates whether to run an ASP.NET Core application using IIS in-process or out-of-process. */
    AspNetCoreHostingModel: StringPropertyType;
    /** Indicates which AspNetCoreModule version to use. Versions include V1 and V2. */
    AspNetCoreModuleName: StringPropertyType;
    AssemblyKeyContainerName: StringPropertyType;
    AssemblyKeyProviderName: StringPropertyType;
    /** Name of output assembly */
    AssemblyName: StringPropertyType;
    AssemblyOriginatorKeyFile: StringPropertyType;
    AssemblyOriginatorKeyFileType: StringPropertyType;
    AssemblyOriginatorKeyMode: StringPropertyType;
    AssemblySearchPath_UseAssemblyFolders: string;
    AssemblySearchPath_UseAssemblyFoldersConfigFileSearchPath: string;
    AssemblySearchPath_UseCandidateAssemblyFiles: string;
    AssemblySearchPath_UseGAC: string;
    AssemblySearchPath_UseHintPathFromItem: string;
    AssemblySearchPath_UseOutDir: string;
    AssemblySearchPath_UseRawFileName: string;
    AssemblySearchPath_UseReferencePath: string;
    AssemblySearchPath_UseRegistry: string;
    AssemblySearchPath_UseTargetFrameworkDirectory: string;
    /** Semicolon-delimited ordered list of paths to search when the ResolveAssemblyReference task looks for an assembly. Some non-path locations like the Global Assembly Cache can also be searched using curly braces: {GAC}. */
    AssemblySearchPaths: StringPropertyType;
    /** Description for the assembly manifest */
    AssemblyTitle: StringPropertyType;
    AssemblyType: StringPropertyType;
    /** Numeric value of the version for the assembly manifest in the format major.minor.patch (e.g. 2.4.0) */
    AssemblyVersion: StringPropertyType;
    /** Can be set to one or more target framework monikers. When determining package compatibility, if the package does not have compatible assets for the project's real target framework, compatibility will be rechecked using each target framework from the AssetTargetFramework project of the referencing project. */
    AssetTargetFallback: StringPropertyType;
    AssignCulture: AssignCultureType;
    AssignProjectConfiguration: AssignProjectConfigurationType;
    AssignTargetPath: AssignTargetPathType;
    /** A comma-separated list of NuGet packages authors */
    Authors: StringPropertyType;
    /** Indicates whether BindingRedirect elements should be automatically generated for referenced assemblies. */
    AutoGenerateBindingRedirects: StringPropertyType;
    /** Flag indicating whether to enable auto increment of an app package revision. */
    AutoIncrementPackageRevision: StringPropertyType;
    /** boolean */
    AutorunEnabled: string;
    AxImp: AxImpType;
    BaseAddress: StringPropertyType;
    /** The base application manifest for the build. Contains ClickOnce security information. */
    BaseApplicationManifest: SimpleItemType;
    /** Base path of output folder, where all configuration-specific output folders will be created. Default value is bin\. */
    BaseOutputPath: StringPropertyType;
    /** HomeSite, Relative, or Absolute */
    BootstrapperComponentsLocation: StringPropertyType;
    BootstrapperComponentsUrl: StringPropertyType;
    /** boolean */
    BootstrapperEnabled: string;
    BootstrapperFile: BootstrapperFileType;
    Bscmake: BscmakeType[];
    CallTarget: CallTargetType;
    CharacterSet: StringPropertyType;
    CheckForOverflowUnderflow: StringPropertyType;
    CL: CLType;
    ClCompile: ClCompileType;
    ClInclude: ClIncludeType;
    CLRSupport: StringPropertyType;
    CodeAnalysis: CodeAnalysisType;
    /** Additional options to pass to the Code Analysis command line tool. */
    CodeAnalysisAdditionalOptions: StringPropertyType;
    /** Indicates whether to apply the XSL style sheet specified in $(CodeAnalysisLogFileXsl) to the Code Analysis report. This report is specified in $(CodeAnalysisLogFile). The default is false. */
    CodeAnalysisApplyLogFileXsl: string;
    /** Path to the XSL style sheet that will be applied to the Code Analysis console output. The default is an empty string (''), which causes Code Analysis to use its default console output. */
    CodeAnalysisConsoleXsl: StringPropertyType;
    /** Culture to use for Code Analysis spelling rules, for example, 'en-US' or 'en-AU'. The default is the current user interface language for Windows. */
    CodeAnalysisCulture: StringPropertyType;
    /** Additional reference assembly paths to pass to the Code Analysis command line tool. */
    CodeAnalysisDependentAssemblyPaths: CodeAnalysisDependentAssemblyPathsType;
    /** Code Analysis custom dictionaries. */
    CodeAnalysisDictionary: CodeAnalysisDictionaryType;
    /** Indicates whether Code Analysis should fail if a rule or rule set is missing. The default is false. */
    CodeAnalysisFailOnMissingRules: string;
    /** Indicates whether Code Analysis generates a report file, even when there are no active warnings or errors. The default is true. */
    CodeAnalysisForceOutput: string;
    /** Indicates whether Code Analysis generates a '$(CodeAnalysisInputAssembly).lastcodeanalysissucceeded' file in the output folder when no build-breaking errors occur. The default is true. */
    CodeAnalysisGenerateSuccessFile: string;
    /** Indicates whether Code Analysis will ignore the default rule directories when searching for rules. The default is false. */
    CodeAnalysisIgnoreBuiltInRules: string;
    /** Indicates whether Code Analysis will ignore the default rule set directories when searching for rule sets. The default is false. */
    CodeAnalysisIgnoreBuiltInRuleSets: string;
    /** Indicates whether Code Analysis should fail silently when it analyzes invalid assemblies, such as those without managed code. The default is true. */
    CodeAnalysisIgnoreGeneratedCode: string;
    /** Indicates whether Code Analysis should silently fail when analyzing invalid assemblies, such as those without managed code. The default is true. */
    CodeAnalysisIgnoreInvalidTargets: string;
    /** Code Analysis projects (*.fxcop) or reports to import. */
    CodeAnalysisImport: CodeAnalysisImportType;
    /** Path to the assembly to be analyzed by Code Analysis. The default is '$(OutDir)$(TargetName)$(TargetExt)'. */
    CodeAnalysisInputAssembly: StringPropertyType;
    /** Path to the output file for the Code Analysis report. The default is '$(CodeAnalysisInputAssembly).CodeAnalysisLog.xml'. */
    CodeAnalysisLogFile: StringPropertyType;
    /** Path to the XSL style sheet to reference in the Code Analysis output report. This report is specified in $(CodeAnalysisLogFile). The default is an empty string (''). */
    CodeAnalysisLogFileXsl: StringPropertyType;
    /** Name of the file, without the path, where Code Analysis project-level suppressions are stored. The default is 'GlobalSuppressions$(DefaultLanguageSourceExtension)'. */
    CodeAnalysisModuleSuppressionsFile: StringPropertyType;
    /** Indicates whether to output Code Analysis warnings and errors to the console. The default is false. */
    CodeAnalysisOutputToConsole: string;
    /** Indicates whether to run all overridable Code Analysis rules against all targets. This will cause specific rules, such as those within the Design and Naming categories, to run against both public and internal APIs, instead of only public APIs. The default is false. */
    CodeAnalysisOverrideRuleVisibilities: string;
    /** Path to the Code Analysis installation folder. The default is '$(VSINSTALLDIR)\Team Tools\Static Analysis Tools\FxCop'. */
    CodeAnalysisPath: StringPropertyType;
    /** Path to the .NET Framework folder that contains platform assemblies, such as mscorlib.dll and System.dll. The default is an empty string (''). */
    CodeAnalysisPlatformPath: StringPropertyType;
    /** Path to the Code Analysis project (*.fxcop) to load. The default is an empty string (''). */
    CodeAnalysisProject: StringPropertyType;
    /** Indicates whether to suppress all Code Analysis console output other than errors and warnings. This applies when $(CodeAnalysisOutputToConsole) is true. The default is false. */
    CodeAnalysisQuiet: string;
    /** Semicolon-separated list of paths either to Code Analysis rule assemblies or to folders that contain Code Analysis rule assemblies. The paths are in the form '[+|-][!][file|folder]', where '+' enables all rules in rule assembly, '-' disables all rules in rule assembly, and '!' causes all rules in rule assembly to be treated as errors. For example '+D:\Projects\Rules\NamingRules.dll;+!D:\Projects\Rules\SecurityRules.dll'. The default is '$(CodeAnalysisPath)\Rules'. */
    CodeAnalysisRuleAssemblies: StringPropertyType;
    /** Semicolon-separated list of directories in which to search for rules when resolving a rule set. The default is '$(CodeAnalysisPath)\Rules' unless the CodeAnalysisIgnoreBuiltInRules property is set to true. */
    CodeAnalysisRuleDirectories: StringPropertyType;
    /** Semicolon-separated list of Code Analysis rules. The rules are in the form '[+|-][!]Category#CheckId', where '+' enables the rule, '-' disables the rule, and '!' causes the rule to be treated as an error. For example, '-Microsoft.Naming#CA1700;+!Microsoft.Naming#CA1701'. The default is an empty string ('') which enables all rules. */
    CodeAnalysisRules: StringPropertyType;
    /** A .ruleset file which contains a list of rules to run during analysis. The string can be a full path, a path relative to the project file, or a file name. If a file name is specified, the CodeAnalysisRuleSetDirectories property will be searched to find the file. The default is an empty string (''). */
    CodeAnalysisRuleSet: StringPropertyType;
    /** Semicolon-separated list of directories in which to search for rule sets. The default is '$(VSINSTALLDIR)\Team Tools\Static Analysis Tools\Rule Sets' unless the CodeAnalysisIgnoreBuiltInRuleSets property is set to true. */
    CodeAnalysisRuleSetDirectories: StringPropertyType;
    /** Comma-separated list of the type ('Active', 'Excluded', or 'Absent') of warnings and errors to save to the output report file. The default is 'Active'. */
    CodeAnalysisSaveMessagesToReport: StringPropertyType;
    /** Indicates whether Code Analysis should search the Global Assembly Cache (GAC) for missing references that are encountered during analysis. The default is true. */
    CodeAnalysisSearchGlobalAssemblyCache: string;
    /** Indicates whether to output a Code Analysis summary to the console after analysis. The default is false. */
    CodeAnalysisSummary: string;
    /** The time, in seconds, that Code Analysis should wait for analysis of a single item to complete before it aborts analysis. Specify 0 to cause Code Analysis to wait indefinitely. The default is 120. */
    CodeAnalysisTimeout: StringPropertyType;
    /** Indicates whether to treat all Code Analysis warnings as errors. The default is false. */
    CodeAnalysisTreatWarningsAsErrors: string;
    /** Indicates whether to update the Code Analysis project (*.fxcop) specified in $(CodeAnalysisProject). This applies when there are changes during analysis. The default is false. */
    CodeAnalysisUpdateProject: string;
    /** Indicates whether to include the name of the rule when Code Analysis emits a suppression. The default is true. */
    CodeAnalysisUseTypeNameInSuppression: string;
    /** Indicates whether to output verbose Code Analysis diagnostic info to the console. The default is false. */
    CodeAnalysisVerbose: string;
    CodePage: StringPropertyType;
    CombinePath: CombinePathType;
    COMFileReference: COMFileReferenceType;
    ComFilesOutputGroupOutputs: ComFilesOutputGroupOutputsType;
    /** Company name for the assembly manifest */
    Company: StringPropertyType;
    /** Source files for compiler */
    Compile: CompileType;
    /** Controls where source generated files are saved. */
    CompilerGeneratedFilesOutputPath: StringPropertyType;
    /** Reference to a COM component */
    COMReference: COMReferenceType;
    Configuration: StringPropertyType;
    ConfigurationName: StringPropertyType;
    ConfigurationOverrideFile: StringPropertyType;
    ConfigurationType: StringPropertyType;
    /** Files that are not compiled, but may be embedded or published */
    Content: ContentType;
    ConvertToAbsolutePath: ConvertToAbsolutePathType;
    Copy: CopyType;
    /** Value indicating whether symbol files will be copied from NuGet packages by the compiler */
    CopyDebugSymbolFilesFromPackages: string;
    /** Value indicating whether documentation files will be copied from NuGet packages by the compiler */
    CopyDocumentationFilesFromPackages: string;
    CopyLocalFilesOutputGroupOutput: CopyLocalFilesOutputGroupOutputType;
    /** Set to true to copy RazorGenerate items (.cshtml) to the publish directory. Typically Razor files are not needed for a published application if they participate in compilation at build-time or publish-time. By default, the Razor SDK will suppress the copying of RazorGenerate items to the publish directory. */
    CopyRazorGenerateFilesToPublishDirectory: string;
    /** Set to true to copy reference assembly items to the publish directory. Typically reference assemblies are not needed for a published application if Razor compilation occurs at build-time or publish-time. By default, the Razor SDK will suppress the copying of reference assemblies to the publish directory. */
    CopyRefAssembliesToPublishDirectory: string;
    /** Copyright details for the NuGet package */
    Copyright: StringPropertyType;
    CopyWinmdArtifactsOutputGroupOutputs: CopyWinmdArtifactsOutputGroupOutputsType;
    CPPClean: CPPCleanType;
    CreateAppStoreContainer: CreateAppStoreContainerType;
    CreateCSharpManifestResourceName: CreateCSharpManifestResourceNameType;
    CreateDesktopShortcut: string;
    CreateItem: CreateItemType;
    CreatePriConfigXmlForFullIndex: CreatePriConfigXmlForFullIndexType;
    CreatePriConfigXmlForMainPackageFileMap: CreatePriConfigXmlWithPackagingElementTaskType;
    CreatePriConfigXmlForSplitting: CreatePriConfigXmlForSplittingType;
    CreatePriConfigXmlTask: CreatePriConfigXmlTaskType;
    CreatePriFilesForPortableLibraries: CreatePriFilesForPortableLibrariesType;
    CreateProperty: CreatePropertyType;
    CreateVisualBasicManifestResourceName: CreateVisualBasicManifestResourceNameType;
    /** boolean */
    CreateWebPageOnPublish: string;
    Csc: CscType;
    CurrentSolutionConfigurationContents: GenericPropertyType;
    CustomBuildStep: CustomBuildStepType;
    DebugSecurityZoneURL: StringPropertyType;
    /** Whether to emit symbols (boolean) */
    DebugSymbols: string;
    /** none, pdbonly, embedded, portable, or full. From C# 6 onwards, pdbonly is the same as full. */
    DebugType: DebugTypeType;
    DefaultClientScript: StringPropertyType;
    DefaultHTMLPageLayout: StringPropertyType;
    /** Default resource language. */
    DefaultLanguage: StringPropertyType;
    DefaultTargetSchema: StringPropertyType;
    DefineConstants: StringPropertyType;
    /** Whether DEBUG is defined (boolean) */
    DefineDebug: string;
    /** Whether TRACE is defined (boolean) */
    DefineTrace: string;
    DelaySign: StringPropertyType;
    Delete: DeleteType;
    DeployDirSuffix: StringPropertyType;
    /** A long description of the NuGet package for UI display */
    Description: StringPropertyType;
    /** Whether Visual Studio should do its own faster up-to-date check before Building, rather than invoke MSBuild to do a possibly more accurate one. You would set this to true if you have a heavily customized build process and builds in Visual Studio are not occurring when they should. */
    DisableFastUpToDateCheck: string;
    DisableLangXtns: StringPropertyType;
    /** Indicates whether Design Time Build should be disabled for referenced @(Protobuf) files. */
    DisableProtobufDesignTimeBuild: string;
    /** When true, do not discover ProjectReference items representing projects referenced by this project's ProjectReferences. Applies only to projects using the .NET SDK. */
    DisableTransitiveProjectReferences: string;
    DisableXbfGeneration: string;
    /** boolean */
    DisallowUrlActivation: string;
    DocumentationFile: StringPropertyType;
    /** The CLI tool that the user wants restored in the context of the project */
    DotNetCliToolReference: DotNetCliToolReferenceType;
    DownloadFile: DownloadFileType;
    /** Resources to be embedded in the generated assembly */
    EmbeddedResource: EmbeddedResourceType;
    EmbedManifest: StringPropertyType;
    /** Configures whether all of the @(RazorGenerate) items will be added as embedded files to the produced assembly. When true, everything in @(RazorGenerate) will be added to @(RazorEmbeddedFiles) and passed to CSC. */
    EmbedRazorGenerateSources: string;
    /** Controls whether source generated files will be saved. */
    EmitCompilerGeneratedFiles: string;
    EnableASPDebugging: StringPropertyType;
    EnableASPXDebugging: StringPropertyType;
    /** Enable default Compile item globs for source files. */
    EnableDefaultCompileItems: string;
    /** Set to true to automatically include certain file types, such as .cshtml files, as content in the project. When referenced via Microsoft.NET.Sdk.Web, this additionally includes all files under wwwroot, and any config files. */
    EnableDefaultContentItems: string;
    /** Defaults to true, and if set to false will disable all default item globs. */
    EnableDefaultItems: string;
    /** Enable default None item globs (which cover most files in the project not covered by other globs). */
    EnableDefaultNoneItems: string;
    /** Set to true to automatically include Razor (.razor) files in @(RazorComponent) from @(Content). */
    EnableDefaultRazorComponentItems: string;
    /** Set to true to automatically include Razor (.cshtml) files in @(RazorGenerate) from @(Content). */
    EnableDefaultRazorGenerateItems: string;
    /** Enable Store Submission from the packaging wizard. */
    EnableDirectStoreSubmission: StringPropertyType;
    /** Indicates whether the .NET analyzers are enabled. They are enabled by default for projects that target .NET 5.0 or later. */
    EnableNETAnalyzers: string;
    EnableSecurityDebugging: StringPropertyType;
    /** Flag indicating whether to enable signing checks during app package generation. */
    EnableSigningChecks: StringPropertyType;
    EnableSQLServerDebugging: StringPropertyType;
    EnableUnmanagedDebugging: StringPropertyType;
    /** Controls whether code style analysis rules configured as warnings or errors should execute on build and report violations. The default is false. */
    EnforceCodeStyleInBuild: string;
    /** Windows Application Packaging project-specific: Enables the packaging of an executable without having the source code available. */
    EntryPointExe: StringPropertyType;
    /** Windows Application Packaging project-specific: Relative path to entry point project file. */
    EntryPointProjectUniqueName: StringPropertyType;
    Error: ErrorType;
    ErrorLog: StringPropertyType;
    ErrorReport: StringPropertyType;
    ErrorReportUrl: StringPropertyType;
    ExcludeDeploymentUrl: string;
    ExcludedPermissions: StringPropertyType;
    Exec: ExecType;
    ExpandPayloadDirectories: ExpandPayloadDirectoriesType;
    ExpandPriContent: ExpandPriContentType;
    ExtractHashAlgorithmId: ExtractHashAlgorithmIdType;
    FallbackCulture: StringPropertyType;
    FileAlignment: StringPropertyType;
    FileAssociation: FileAssociationType;
    FileUpgradeFlags: StringPropertyType;
    /** Numeric value of the version for the assembly manifest in the format major.minor.build.revision (e.g. 2.4.0.1) */
    FileVersion: StringPropertyType;
    FilterOutUnusedLanguagesResourceFileMaps: FilterOutUnusedLanguagesResourceFileMapsType;
    /** Path to the final app manifest. */
    FinalAppxManifestName: StringPropertyType;
    /** Full path to the final app package recipe. */
    FinalAppxPackageRecipe: StringPropertyType;
    FindAppConfigFile: FindAppConfigFileType;
    FindInList: FindInListType;
    FindUnderPath: FindUnderPathType;
    /** Folder on disk */
    Folder: SimpleItemType;
    FormatUrl: FormatUrlType;
    FormatVersion: FormatVersionType;
    FormFactorID: StringPropertyType;
    /** Sets the /sdkpath switch for a VB project to the specified value */
    FrameworkPathOverride: StringPropertyType;
    /** Reference to a shared framework. */
    FrameworkReference: FrameworkReferenceType;
    GenerateApplicationManifest: GenerateApplicationManifestType;
    GenerateAppxManifest: GenerateAppxManifestType;
    /** Flag indicating whether to generate app package during the build. */
    GenerateAppxPackageOnBuild: StringPropertyType;
    GenerateAppxPackageRecipe: GenerateAppxPackageRecipeType;
    GenerateAppxSymbolPackage: GenerateAppxSymbolPackageType;
    GenerateBootstrapper: GenerateBootstrapperType;
    GenerateDeploymentManifest: GenerateDeploymentManifestType;
    /** Value indicating whether a documentation file will be generated by the compiler */
    GenerateDocumentationFile: string;
    GenerateLauncher: GenerateLauncherType;
    GenerateLibraryLayout: string;
    GenerateManifests: StringPropertyType;
    /** Value indicating whether a NuGet package will be generated when the project is built */
    GeneratePackageOnBuild: string;
    GeneratePriConfigurationFiles: GeneratePriConfigurationFilesType;
    GenerateProjectArchitecturesFile: GenerateProjectArchitecturesFileType;
    GenerateProjectPriFile: GenerateProjectPriFileType;
    GenerateResource: GenerateResourceType;
    GenerateSerializationAssemblies: StringPropertyType;
    GenerateTrustInfo: GenerateTrustInfoType;
    GetAppxBundlePlatforms: GetAppxBundlePlatformsType;
    GetAssemblyIdentity: GetAssemblyIdentityType;
    GetDefaultResourceLanguage: GetDefaultResourceLanguageType;
    GetFileHash: GetFileHashType;
    GetFrameworkPath: GetFrameworkPathType;
    GetFrameworkSdkPackages: GetFrameworkSdkPackagesType;
    GetFrameworkSdkPath: GetFrameworkSdkPathType;
    GetOutputFileName: GetOutputFileNameType;
    GetPackageArchitecture: GetPackageArchitectureType;
    GetReferenceAssemblyPaths: GetReferenceAssemblyPathsType;
    GetSdkPropertyValue: GetSdkPropertyValueType;
    GetSdkToolFullPath: GetSdkToolFullPathType;
    GetWindowsDesktopSdkDir: GetWindowsDesktopSdkDirType;
    HighEntropyVA: StringPropertyType;
    HostInBrowser: string;
    IgnoreImportLibrary: string;
    /** Enable implicit global usings for the C# project. Possible values are enable, true, and disable. */
    ImplicitUsings: ImplicitUsingsType;
    /** Assemblies whose namespaces should be imported by the Visual Basic compiler */
    Import: SimpleItemType;
    /** Flag indicating whether to include primary build outputs into the app package payload. */
    IncludeBuiltProjectOutputGroup: StringPropertyType;
    /** Flag indicating whether to include COM files into the app package payload. */
    IncludeComFilesOutputGroup: StringPropertyType;
    /** Flag indicating whether to include content files into the app package payload. */
    IncludeContentFilesProjectOutputGroup: StringPropertyType;
    /** Flag indicating whether to include files marked as 'Copy local' into the app package payload. */
    IncludeCopyLocalFilesOutputGroup: StringPropertyType;
    /** Flag indicating whether to include WinMD artifacts into the app package payload. */
    IncludeCopyWinmdArtifactsOutputGroup: StringPropertyType;
    /** Flag indicating whether to include custom output group into the app package payload. */
    IncludeCustomOutputGroupForPackaging: StringPropertyType;
    /** Flag indicating whether to include debug symbols into the app package payload. */
    IncludeDebugSymbolsProjectOutputGroup: StringPropertyType;
    /** Flag indicating whether to include documentation into the app package payload. */
    IncludeDocumentationProjectOutputGroup: StringPropertyType;
    /** Flag indicating whether to include resolved SDK references into the app package payload. */
    IncludeGetResolvedSDKReferences: StringPropertyType;
    /** Flag indicating whether to include resource index (PRI) files into the app package payload. */
    IncludePriFilesOutputGroup: StringPropertyType;
    /** Configures whether all Razor content items (.cshtml files) will be marked to be included in the produced NuGet package as content. All Content items are included in a NuGet package as content files. This setting can be used to control this behavior for Razor content items. */
    IncludeRazorContentInPack: string;
    /** Flag indicating whether to include satellite DLLs into the app package payload. */
    IncludeSatelliteDllsProjectOutputGroup: StringPropertyType;
    /** Flag indicating whether to include SDK redist into the app package payload. */
    IncludeSDKRedistOutputGroup: StringPropertyType;
    /** Flag indicating whether to include SGen files into the app package payload. */
    IncludeSGenFilesOutputGroup: StringPropertyType;
    /** Flag indicating whether to include source files into the app package payload. */
    IncludeSourceFilesProjectOutputGroup: StringPropertyType;
    /** Product version of the assembly for UI display (e.g. 1.0 Beta) */
    InformationalVersion: StringPropertyType;
    /** Flag indicating whether to insert reverse resource map during resource index generation. */
    InsertReverseMap: StringPropertyType;
    Install: StringPropertyType;
    /** Web, Unc, or Disk */
    InstallFrom: StringPropertyType;
    InstallUrl: StringPropertyType;
    /** Specifies that internal types and members are visible to the specified friend assemblies. */
    InternalsVisibleTo: InternalsVisibleToType;
    /** Indicates whether an app runs in globalization-invariant mode without access to culture-specific data and behavior. */
    InvariantGlobalization: string;
    /** Indicates whether a class library is compatible with native AOT. Setting to true will enable analyzers for trimming, single file, and AOT. */
    IsAotCompatible: string;
    IsAssembly: IsAssemblyType;
    IsCodeSharingProject: string;
    /** Indicates whether the project can be used to create a NuGet package. */
    IsPackable: string;
    IsWebBootstrapper: StringPropertyType;
    JCPA: StringPropertyType;
    Keyword: StringPropertyType;
    LangVersion: StringPropertyType;
    /** Full path to a folder with package layout. */
    LayoutDir: StringPropertyType;
    LC: LCType;
    LIB: LIBType;
    Link: LinkType;
    LinkIncremental: StringPropertyType;
    MakeAppxBundle: MakeAppxBundleType;
    /** Full path to makeappx.exe utility. */
    MakeAppxExeFullPath: StringPropertyType;
    MakeAppxPack: MakeAppxPackType;
    MakeDir: MakeDirType;
    /** Full path to makepri.exe utility. */
    MakePriExeFullPath: StringPropertyType;
    /** Name of the binary containing managed WinMD in-proc implementation. */
    ManagedWinmdInprocImplementation: StringPropertyType;
    Manifest: ManifestType;
    ManifestCertificateThumbprint: StringPropertyType;
    ManifestKeyFile: StringPropertyType;
    /** boolean */
    MapFileExtensions: string;
    Message: MessageType;
    Midl: MidlType[];
    /** Matches the expression "\d\.\d\.\d\.\d" */
    MinimumRequiredVersion: StringPropertyType;
    MinimumVisualStudioVersion: StringPropertyType;
    Move: MoveType;
    MSBuild: MSBuildType;
    MSBuildAllProjects: StringPropertyType;
    /** Indicates whether to treat all warnings as errors when building a project. */
    MSBuildTreatWarningsAsErrors: StringPropertyType;
    /** Indicates a semicolon delimited list of warnings to treat as errors when building a project. */
    MSBuildWarningsAsErrors: StringPropertyType;
    /** Indicates a semicolon delimited list of warnings to treat as low importance messages when building a project. */
    MSBuildWarningsAsMessages: StringPropertyType;
    Mt: MtType;
    MyType: StringPropertyType;
    /** Reference to a native manifest file, or to a file that contains a native manifest */
    NativeReference: NativeReferenceType;
    /** The locale ID for the NuGet package */
    NeutralLanguage: StringPropertyType;
    NoConfig: StringPropertyType;
    /** Files that should have no role in the build process */
    None: NoneType;
    NoStandardLibraries: StringPropertyType;
    /** Whether standard libraries (such as mscorlib) should be referenced automatically (boolean) */
    NoStdLib: string;
    /** Comma separated list of disabled warnings */
    NoWarn: StringPropertyType;
    /** Set the nullable annotations and warnings context for the C# project. Possible values are enable, disable, warnings and annotations. */
    Nullable: NullableType;
    OldToolsVersion: StringPropertyType;
    /** boolean */
    OpenBrowserOnPublish: string;
    /** Should compiler optimize output (boolean) */
    Optimize: string;
    /** Option Compare setting (Text or Binary) */
    OptionCompare: StringPropertyType;
    /** Should Option Explicit be set (On or Off) */
    OptionExplicit: StringPropertyType;
    /** Should Option Infer be set (On or Off) */
    OptionInfer: StringPropertyType;
    /** Should Option Strict be set (On or Off) */
    OptionStrict: StringPropertyType;
    OSVersion: StringPropertyType;
    OutDir: StringPropertyType;
    /** Path to output folder, with trailing slash */
    OutputPath: StringPropertyType;
    /** Type of output to generate (WinExe, Exe, or Library) */
    OutputType: StringPropertyType;
    /** Overwrite Store Submission that has been queued by a previous build. */
    OverwritePendingSubmission: StringPropertyType;
    /** App package certificate key file. */
    PackageCertificateKeyFile: StringPropertyType;
    /** The URL for a 64x64 image with transparent background to use as the icon for the NuGet package in UI display */
    PackageIconUrl: StringPropertyType;
    /** The case-insensitive NuGet package identifier, which must be unique across nuget.org or whatever gallery the NuGet package will reside in. IDs may not contain spaces or characters that are not valid for a URL, and generally follow .NET namespace rules. */
    PackageId: StringPropertyType;
    /** The project license's SPDX identifier. Only OSI and FSF approved licenses can use an identifier. Other licenses should use PackageLicenseFile. */
    PackageLicenseExpression: StringPropertyType;
    /** A path to the package's license file. Should only be used when the package doesn't use an OSI or FSF approved license. */
    PackageLicenseFile: StringPropertyType;
    /** The URL for the NuGet package's license, often shown in UI displays as well as nuget.org */
    PackageLicenseUrl: StringPropertyType;
    /** The URL for the NuGet package's home page, often shown in UI displays as well as nuget.org */
    PackageProjectUrl: StringPropertyType;
    /** Reference to a package */
    PackageReference: PackageReferenceType;
    /** A description of the changes made in this release of the NuGet package, often used in UI like the Updates tab of the Visual Studio Package Manager in place of the package description */
    PackageReleaseNotes: StringPropertyType;
    /** Value indicating whether the client must prompt the consumer to accept the NuGet package license before installing the package */
    PackageRequireLicenseAcceptance: string;
    /** A space-delimited list of tags and keywords that describe the NuGet package and aid discoverability of NuGet packages through search and filtering mechanisms */
    PackageTags: StringPropertyType;
    /** Indicates what the intended package use is, e.g. .NET CLI global tool, standard dependency, etc. */
    PackageType: StringPropertyType;
    /** Numeric value of the NuGet package version in the format major.minor.patch pattern (e.g. 1.0.1). Version numbers may include a pre-release suffix (e.g. 1.0.1-beta) */
    PackageVersion: StringPropertyType;
    /** Full path to a text file containing packaging directory writes log. */
    PackagingDirectoryWritesLogPath: StringPropertyType;
    /** Full path to a text file containing packaging file writes log. */
    PackagingFileWritesLogPath: StringPropertyType;
    /** Indicate whether the NuGet package should be configured as a .NET tool suitable for use with "dotnet tool install". */
    PackAsTool: string;
    /** XAML files that are converted to binary and compiled into the assembly */
    Page: PageType;
    ParsePlatformSpecificBundleArtifactsLists: ParsePlatformSpecificBundleArtifactsListsType;
    /** Full path to pdbcopy.exe utility. */
    PdbCopyExeFullPath: StringPropertyType;
    Platform: StringPropertyType;
    PlatformFamilyName: StringPropertyType;
    PlatformID: StringPropertyType;
    PlatformName: StringPropertyType;
    /** Full path to a folder where platform-specific bundle artifact list files are stored. */
    PlatformSpecificBundleArtifactsListDir: StringPropertyType;
    /** Name of the folder where platform-specific bundle artifact lists are stored. */
    PlatformSpecificBundleArtifactsListDirName: StringPropertyType;
    PlatformTarget: StringPropertyType;
    PlatformToolset: StringPropertyType;
    /** Platform version description. Used to map between internal OS version and marketing OS version. */
    PlatformVersionDescription: PlatformVersionDescriptionType;
    /** Command line to be run at the end of build */
    PostBuildEvent: StringPropertyType;
    /** Command line to be run at the start of build */
    PreBuildEvent: StringPropertyType;
    Prefer32Bit: StringPropertyType;
    PreLinkEvent: PreLinkEventType;
    /** Value indicating whether reference assemblies can be used in dynamic compilation */
    PreserveCompilationContext: string;
    /** String resources to be indexed in app package's resource index. */
    PRIResource: PRIResourceType;
    ProduceReferenceAssembly: string;
    /** Product name information for the assembly manifest */
    Product: StringPropertyType;
    ProductName: StringPropertyType;
    ProductVersion: StringPropertyType;
    /** An MSBuild Project */
    Project: ProjectType;
    ProjectConfiguration: ProjectConfigurationType;
    ProjectGuid: StringPropertyType;
    ProjectPriFile: ProjectPriFileType;
    /** File name to use for project-specific resource index file (PRI). */
    ProjectPriFileName: StringPropertyType;
    /** Full path to project-specific resource index file (PRI). */
    ProjectPriFullPath: StringPropertyType;
    /** Name of the resource index used in the generated .pri file. */
    ProjectPriIndexName: StringPropertyType;
    /** Reference to another project */
    ProjectReference: ProjectReferenceType;
    ProjectType: StringPropertyType;
    ProjectTypeGuids: StringPropertyType;
    /** Indicates whether the project should produce native ahead-of-time compiled images during publish. */
    PublishAot: string;
    PublisherName: StringPropertyType;
    PublishFile: PublishFileType;
    /** Indicates whether the project should produce ReadyToRun images during publish. */
    PublishReadyToRun: string;
    /** Indicates whether the project should bundle all application-dependent files into a single binary during publish. */
    PublishSingleFile: string;
    /** Indicates whether the project should produce trimmed assembly images during publish. */
    PublishTrimmed: string;
    PublishUrl: StringPropertyType;
    /** Indicates whether Razor files should be compiled at build time. */
    RazorCompileOnBuild: string;
    /** Indicates whether Razor files should be compiled at publish time. */
    RazorCompileOnPublish: string;
    /** Directory for Razor output. */
    RazorOutputPath: StringPropertyType;
    /** File name (without extension) of the assembly produced by Razor. */
    RazorTargetName: StringPropertyType;
    RC: RCType;
    ReadLinesFromFile: ReadLinesFromFileType;
    RecursePath: StringPropertyType;
    /** Reference to an assembly */
    Reference: ReferenceType;
    /** Semi-colon separated list of folders to search during reference resolution */
    ReferencePath: StringPropertyType;
    RegisterAssembly: RegisterAssemblyType;
    RegisterForComInterop: StringPropertyType;
    RemoteDebugEnabled: StringPropertyType;
    RemoteDebugMachine: StringPropertyType;
    RemoveDir: RemoveDirType;
    RemoveDuplicatePayload: RemoveDuplicatePayloadType;
    RemoveDuplicatePriFiles: RemoveDuplicatePriFilesType;
    RemoveDuplicates: RemoveDuplicatesType;
    RemoveDuplicateSDKReferences: RemoveDuplicateSDKReferencesType;
    RemoveIntegerChecks: StringPropertyType;
    ReportAnalyzer: StringPropertyType;
    /** The type of the repository where the project is stored (e.g. git) */
    RepositoryType: StringPropertyType;
    /** The URL for the repository where the project is stored */
    RepositoryUrl: StringPropertyType;
    RequiresFramework35SP1Assembly: RequiresFramework35SP1AssemblyType;
    /** Full path to a folder containing resgen tool. */
    ResgenToolPath: StringPropertyType;
    ResolveAssemblyReference: ResolveAssemblyReferenceType;
    ResolveComReference: ResolveComReferenceType;
    ResolveKeySource: ResolveKeySourceType;
    ResolveManifestFiles: ResolveManifestFilesType;
    ResolveNativeReference: ResolveNativeReferenceType;
    ResolveNonMSBuildProjectOutput: ResolveNonMSBuildProjectOutputType;
    /** File that is compiled into the assembly */
    Resource: ResourceType;
    ResourceCompile: ResourceCompileType;
    ResponseFile: StringPropertyType;
    /** The feeds that NuGet will use for restoring packages for this project. */
    RestoreSources: StringPropertyType;
    RootNamespace: StringPropertyType;
    /** Disables analyzers at both build and design time. This property takes precedence over RunAnalyzersDuringBuild and RunAnalyzersDuringLiveAnalysis. Default is true. */
    RunAnalyzers: string;
    /** Controls whether analyzers run at build time. Default is true. */
    RunAnalyzersDuringBuild: string;
    /** Controls whether analyzers analyze code live at design time. Default is true. */
    RunAnalyzersDuringLiveAnalysis: string;
    /** Indicates whether to run Code Analysis during the build. */
    RunCodeAnalysis: StringPropertyType;
    RunPostBuildEvent: StringPropertyType;
    /** Runtime identifier supported by the project (e.g. win10-x64) */
    RuntimeIdentifier: StringPropertyType;
    /** Semi-colon separated list of runtime identifiers supported by the project (e.g. win10-x64;osx.10.11-x64;ubuntu.16.04-x64) */
    RuntimeIdentifiers: StringPropertyType;
    /** Semi-colon separated list of culture names to preserve satellite resource assemblies during build and publish. Names must be a valid culture name (like en-US;it; or fr). If left empty, all satellite resource assemblies will be preserved. Defaults to empty. */
    SatelliteResourceLanguages: StringPropertyType;
    SccLocalPath: StringPropertyType;
    SccProjectName: StringPropertyType;
    SccProvider: StringPropertyType;
    SchemaVersion: StringPropertyType;
    /** Reference to an extension SDK */
    SDKReference: SDKReferenceType;
    SecureScoping: StringPropertyType;
    /** Indicates whether the runtime should enable the server garbage collection mode. */
    ServerGarbageCollection: string;
    Service: SimpleItemType;
    SetEnv: SetEnvType;
    SGen: SGenType;
    SignAppxPackage: SignAppxPackageType;
    /** Full path to signtool.exe utility. */
    SignAppxPackageExeFullPath: StringPropertyType;
    SignAssembly: StringPropertyType;
    SignFile: SignFileType;
    SignManifests: StringPropertyType;
    SolutionDir: StringPropertyType;
    SolutionExt: StringPropertyType;
    SolutionFileName: StringPropertyType;
    SolutionName: StringPropertyType;
    SolutionPath: StringPropertyType;
    StartAction: StringPropertyType;
    StartArguments: StringPropertyType;
    StartPage: StringPropertyType;
    StartProgram: StringPropertyType;
    /** Type that contains the main entry point */
    StartupObject: StringPropertyType;
    StartURL: StringPropertyType;
    StartWithIE: StringPropertyType;
    StartWorkingDirectory: StringPropertyType;
    /** A file containing app store association data. */
    StoreAssociationFile: StoreAssociationFileType;
    /** Name of the store manifest file. */
    StoreManifestName: StringPropertyType;
    /** Store manifest schema file. */
    StoreManifestSchema: SchemaItemType;
    StripPrivateSymbols: StripPrivateSymbolsType;
    SuiteName: StringPropertyType;
    SupportUrl: StringPropertyType;
    SuppressXamlWarnings: StringPropertyType;
    TargetCulture: StringPropertyType;
    TargetExt: StringPropertyType;
    /** Framework that this project targets. Must be a Target Framework Moniker (e.g. netcoreapp1.0) */
    TargetFramework: StringPropertyType;
    TargetFrameworkProfile: StringPropertyType;
    /** Semi-colon separated list of frameworks that this project targets. Must be a Target Framework Moniker (e.g. netcoreapp1.0;net461) */
    TargetFrameworks: StringPropertyType;
    TargetFrameworkVersion: StringPropertyType;
    TargetName: StringPropertyType;
    TargetPlatformIdentifier: StringPropertyType;
    TargetPlatformMinVersion: StringPropertyType;
    /** Full path to platform SDK root. */
    TargetPlatformSdkRootOverride: StringPropertyType;
    TargetPlatformVersion: StringPropertyType;
    TargetZone: StringPropertyType;
    Telemetry: TelemetryType;
    /** Indicates whether the runtime should enable tiered JIT compilation. */
    TieredCompilation: string;
    /** A human-friendly title of the package, typically used in UI displays as on nuget.org and the Package Manager in Visual Studio. If not specified, the package ID is used instead. */
    Title: StringPropertyType;
    TlbImp: TlbImpType;
    /** Specifies the command that will invoke the tool after it's installed. */
    ToolCommandName: StringPropertyType;
    Touch: TouchType;
    TreatWarningsAsErrors: StringPropertyType;
    /** Assemblies that should not be trimmed (specify the assembly name without extension). */
    TrimmerRootAssembly: StringPropertyType;
    /** XML files that specify assemblies, types, and their members that should not be trimmed. */
    TrimmerRootDescriptor: StringPropertyType;
    /** boolean */
    TrustUrlParameters: string;
    TypeComplianceDiagnostics: StringPropertyType;
    /** Configures the created packages. Possible values are: StoreAndSideload (produces the appxupload and the sideloaded packages), StoreUpload (produces only the appxupload package), and SideloadOnly(produces only the packages for sideloading). */
    UapAppxPackageBuildMode: StringPropertyType;
    UICulture: StringPropertyType;
    UnregisterAssembly: UnregisterAssemblyType;
    Unzip: UnzipType;
    UpdateAppxManifestForBundle: UpdateAppxManifestForBundleType;
    /** boolean */
    UpdateEnabled: string;
    UpdateInterval: StringPropertyType;
    /** Hours, Days, or Weeks */
    UpdateIntervalUnits: StringPropertyType;
    UpdateMainPackageFileMap: UpdateMainPackageFileMapType;
    UpdateManifest: UpdateManifestType;
    /** Foreground or Background */
    UpdateMode: StringPropertyType;
    /** boolean */
    UpdatePeriodically: string;
    /** boolean */
    UpdateRequired: string;
    UpdateUrl: StringPropertyType;
    UpgradeBackupLocation: StringPropertyType;
    /** Defines an item to be considered an output of the project for the fast up-to-date check, with optional corresponding input via 'Original' metadata. When 'Original' metadata is specified, the input and output are considered in isolation. Useful when a single file will be copied (and potentially transformed in doing so) during build. */
    UpToDateCheckBuilt: UpToDateCheckBuiltType;
    /** Defines an item to be considered an input to the project for the fast up-to-date check. */
    UpToDateCheckInput: UpToDateCheckInputType;
    /** Defines an item to be considered an output of the project for the fast up-to-date check. */
    UpToDateCheckOutput: UpToDateCheckOutputType;
    UseAppConfigForCompiler: string;
    UseApplicationTrust: StringPropertyType;
    UseDebugLibraries: string;
    /** Flag indicating whether to enable incremental registration of the app layout. */
    UseIncrementalAppxRegistration: StringPropertyType;
    UseOfAtl: StringPropertyType;
    UseOfMfc: StringPropertyType;
    /** Indicates whether Razor code generation should use a persistent build server process. */
    UseRazorBuildServer: string;
    /** The ID that will be used to locate the file storing secret configuration values for this project at development time. */
    UserSecretsId: StringPropertyType;
    UseVSHostingProcess: StringPropertyType;
    UseWindowsForms: string;
    UseWPF: string;
    /** A C# global using to add to the project. */
    Using: UsingType;
    UTF8OutPut: StringPropertyType;
    ValidateAppxManifest: ValidateAppxManifestType;
    ValidateAppxManifestItems: ValidateAppxManifestItemsType;
    ValidateAppxPackage: ValidateAppxPackageType;
    ValidateStoreManifest: ValidateStoreManifestType;
    Vbc: VbcType;
    VBRuntime: StringPropertyType;
    VCBuild: VCBuildType;
    VCMessage: VCMessageType;
    VCTargetsPath: StringPropertyType;
    VerifyFileHash: VerifyFileHashType;
    /** Numeric value of the version in the format major.minor.patch (e.g. 2.4.0) */
    Version: StringPropertyType;
    /** When Version is not specified, VersionPrefix represents the first fragment of the version string (e.g. 1.0.0). The syntax is VersionPrefix[-VersionSuffix]. */
    VersionPrefix: StringPropertyType;
    /** When Version is not specified, VersionSuffix represents the second fragment of the version string (e.g. beta). The syntax is VersionPrefix[-VersionSuffix]. */
    VersionSuffix: StringPropertyType;
    VisualStudioVersion: StringPropertyType;
    VSINSTALLDIR: StringPropertyType;
    VSTO_TrustAssembliesLocation: StringPropertyType;
    /** Windows Application Packaging project-specific: Path to Windows Application Packaging project root folder. */
    WapProjPath: StringPropertyType;
    Warning: WarningType;
    /** integer between 0 and 5 inclusive */
    WarningLevel: StringPropertyType;
    /** Comma separated list of warning numbers to treat as errors */
    WarningsAsErrors: StringPropertyType;
    WcfConfigValidationEnabled: string;
    WebPage: StringPropertyType;
    /** Name of Web References folder to display in user interface */
    WebReferences: SimpleItemType;
    /** Represents a reference to a web service */
    WebReferenceUrl: WebReferenceUrlType;
    WholeProgramOptimization: StringPropertyType;
    Win32ResourceFile: StringPropertyType;
    WriteCodeFragment: WriteCodeFragmentType;
    WriteLinesToFile: WriteLinesToFileType;
    WsdlXsdCodeGenCollectionTypes: StringPropertyType;
    WsdlXsdCodeGenEnabled: string;
    WsdlXsdCodeGenEnableDataBinding: string;
    WsdlXsdCodeGenGenerateAsynchronousOperations: string;
    WsdlXsdCodeGenGenerateDataTypesOnly: string;
    WsdlXsdCodeGenGenerateInternalTypes: string;
    WsdlXsdCodeGenGenerateMessageContract: string;
    WsdlXsdCodeGenGenerateSerializableTypes: string;
    WsdlXsdCodeGenImportXmlTypes: string;
    WsdlXsdCodeGenNamespaceMappings: StringPropertyType;
    WsdlXsdCodeGenReuseTypesFlag: string;
    WsdlXsdCodeGenReuseTypesMode: WsdlXsdCodeGenReuseTypesModeType;
    WsdlXsdCodeGenSerializerMode: WsdlXsdCodeGenSerializerModeType;
    WsdlXsdCodeGenUseSerializerForFaults: string;
    WsdlXsdCodeGenWrapped: string;
    XamlRootsLog: StringPropertyType;
    XamlSavedStateFilePath: StringPropertyType;
    Xdcmake: XdcmakeType[];
    XSD: XSDType;
    XslTransformation: XslTransformationType;
    ZipDirectory: ZipDirectoryType;
}
export var document: document;