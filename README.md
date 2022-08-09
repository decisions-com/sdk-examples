# sdk-examples
This is a public project made up of simple requests from customers, partners, and the Decisions PS team.  These projects are provided AS-IS with no implied or explicit warranty of any kind.  Each folder in this project represents a different and standalone SDK example.

- Behaviors - A simple project containing examples of an Initializer, Flow Behaviors, and Folder Behaviors.

- CreateBarCodeStep - A simple project using the Aspose.NET library that is already shipped with Decisions to create barcodes.  This step will be integrated into Decisions product directly after 6.5.

- CustomDataSources - A project containing reporting data source examples using the SDK.

- ExternalInteractionExample - A project containing a step, a service, and an entity using the sdk. It demonstrates how an IAsync step can be created using the SDK and interacted with by external services.
	- Documentation for Example - https://docs.google.com/document/d/1NvVl3PyjeMfvbmgd0JHyfpsyl7cdIlqqzKlEtxZWDZo/edit?usp=sharing 
	
- FetchSpecificSteps - A project containing a step using the SDK. The step takes in a DB connection name and returns all of the current steps used in flows using that DB connection name along with the table they're using.
	
- FileSplitterStep - A project containing a step using the SDK. The step takes a CSV file and splits it into individual files, each containing a specified number of lines.

- FlowToolboxSteps - A project containing steps that produce information about the Flow Toolbox. Currently, there is only one step which produces a CSV listing all available steps minus the .Net Libraries.
	
- FolderFlowAndRuleBehaviorExample - A project utilizing the Flow Engine to kick off flows and log timing metrics using an Initializer, Folder Behavior, and Actions.

- RestrictDecisionsInitializationExample - A project containing an SDK example which filters certain steps out of the step catalog using an Initializer, Folder Behavior, and Flow Behavior.
	- Documentation for Example - https://docs.google.com/document/d/1UuSOXojqrJmhd61mM0_WlvPOvsq20ZpeBoC8Fz71Uyc/edit?usp=sharing

- RestRulesExample - A project containing a simple rule creation step that can be used normally in a flow and via REST integration
    - Documentation for Example - https://docs.google.com/document/d/1-B4CMzYi--spCKGZnY1b9LxB9R7ZzwZidfIBtZDx3_8/edit?usp=sharing

- CustomRuleAdvanced - A project containing sample code for creating a Rule step with Input and Validation features.
	- Companion project for documentation.decisions.com - https://documentation.decisions.com/docs/rule-steps-advanced
